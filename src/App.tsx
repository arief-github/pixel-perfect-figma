import { clsx, columnClasses, rowClasses } from "./helper/clsx"
import { EpicStackLogo } from "./logos/epic-stack"
import { logos } from "./logos/logos"


export default function App() {
	return (
		<div className="min-h-screen grid place-items-center px-4 py-16 md:py-">
			<div className="grid xl:grid-cols-[auto_1fr] gap-12 sm:gap-16 xl:gap-24 place-items-center">
				<div className="max-w-md flex flex-col xl:order-2 xl:items-start xl:text-left items-center text-center">
					<EpicStackLogo className="size-5" />

					<h1 className="text-4xl sm:text-4.5xl md:text-5xl lg:text-5.5xl md:mt-8 font-medium tracking-normal">The  <span className="text-highlight">Epic</span> Stack</h1>
					<p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-normal">Check the  <a href="#" className="text-black underline">Getting Started</a> guide file for how to get your project off the ground!</p>
				</div>
			
				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
					{logos.map((logo) => (
						<li 
							key={logo.href}
							className={clsx(columnClasses[logo.column], rowClasses[logo.row])}
						>
							<a
								href={logo.href}
								className="bg-highlight/[7%] grid size-20 place-items-center rounded-2xl p-4"
							>
								<img src={logo.src} alt={logo.alt} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
