import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

type Data = {
	name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method != 'POST') {
		res.status(405)
	}

	const { name, username } = req.body

	const userExists = await prisma.user.findUnique({
		where: {
			username
		}
	})

	if (userExists) {
		return res.status(400).json({
			message: 'Username already taken.'
		})
	}

	const user = await prisma.user.create({
		data: {
			name,
			username
		}
	})

	setCookie({ res }, '@bookatime:userId', user.id, {
		maxAge: 60 * 60 * 24 * 7, //7 dias
		path: '/'
	})

	return res.status(201).json(user)
}
