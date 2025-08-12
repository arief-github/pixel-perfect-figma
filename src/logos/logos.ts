import docker from './docker.svg'
import eslint from './eslint.svg'
import fakerJS from './faker.svg'
import fly from './fly.svg'
import github from './github.svg'
import msw from './msw.svg'
import playwright from './playwright.svg'
import prettier from './prettier.svg'
import prisma from './prisma.svg'
import radixUI from './radix.svg'
import reactEmail from './react-email.svg'
import remix from './remix.svg'
import resend from './resend.svg'
import sentry from './sentry.svg'
import shadcnUI from './shadcn-ui.svg'
import sqlite from './sqlite.svg'
import tailwind from './tailwind.svg'
import testingLibrary from './testing-library.svg'
import typescript from './typescript.svg'
import vitest from './vitest.svg'
import zod from './zod.svg'

export { EpicStackLogo } from './epic-stack'

/*
	🧝‍♀️ I've prepared this list of Epic Stack logos, 
	so you can display them on the page design.
*/
export const logos = [
	{
		src: remix,
		alt: 'Remix',
		href: 'https://remix.run',
		row: 1,
		column: 1
	},
	{
		src: fly,
		alt: 'Fly.io',
		href: 'https://fly.io',
		row: 2,
		column: 1
	},
	{
		src: sqlite,
		alt: 'SQLite',
		href: 'https://sqlite.org',
		row: 3,
		column: 1
	},
	{
		src: prisma,
		alt: 'Prisma',
		href: 'https://prisma.io',
		row: 2,
		column: 2
	},
	{
		src: zod,
		alt: 'Zod',
		href: 'https://zod.dev/',
		row: 3,
		column: 2
	},
	{
		src: github,
		alt: 'GitHub',
		href: 'https://github.com',
		row: 4,
		column: 2
	},
	{
		src: resend,
		alt: 'Resend',
		href: 'https://resend.com',
		row: 5,
		column: 2
	},
	{
		src: reactEmail,
		alt: 'React Email',
		href: 'https://react.email',
		row: 6,
		column: 2
	},
	{
		src: tailwind,
		alt: 'Tailwind CSS',
		href: 'https://tailwindcss.com',
		row: 3,
		column: 3
	},
	{
		src: radixUI,
		alt: 'Radix UI',
		href: 'https://www.radix-ui.com/',
		row: 4,
		column: 3
	},
	{
		src: shadcnUI,
		alt: 'shadcn/ui',
		href: 'https://ui.shadcn.com/',
		row: 5,
		column: 3
	},
	{
		src: playwright,
		alt: 'Playwright',
		href: 'https://playwright.dev/',
		row: 1,
		column: 4
	},
	{
		src: msw,
		alt: 'MSW',
		href: 'https://mswjs.io',
		row: 2,
		column: 4
	},
	{
		src: fakerJS,
		alt: 'Faker.js',
		href: 'https://fakerjs.dev/',
		row: 3,
		column: 4
	},
	{
		src: vitest,
		alt: 'Vitest',
		href: 'https://vitest.dev',
		row: 4,
		column: 4
	},
	{
		src: testingLibrary,
		alt: 'Testing Library',
		href: 'https://testing-library.com',
		row: 5,
		column: 4
	},
	{
		src: docker,
		alt: 'Docker',
		href: 'https://www.docker.com',
		row: 6,
		column: 4
	},
	{
		src: typescript,
		alt: 'TypeScript',
		href: 'https://typescriptlang.org',
		row: 2,
		column: 5
	},
	{
		src: prettier,
		alt: 'Prettier',
		href: 'https://prettier.io',
		row: 3,
		column: 5
	},
	{
		src: eslint,
		alt: 'ESLint',
		href: 'https://eslint.org',
		row: 4,
		column: 5
	},
	{
		src: sentry,
		alt: 'Sentry',
		href: 'https://sentry.io',
		row: 5,
		column: 5
	},
] as const
