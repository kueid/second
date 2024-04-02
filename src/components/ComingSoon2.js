import React from "react";
import "./ComingSoon2.css";

const SubscribeForm = () => (
	<form className="mt-6">
		<div className="relative flex flex-wrap items-stretch w-full rounded shadow overflow-hidden">
			<input
				name="email"
				className="px-5 py-4 grow placeholder:text-lg border-0"
				type="email"
				placeholder="Enter email"
				required
			/>
			<button className="bg-blue-600 hover:bg-opacity-90 text-white border border-blue-600 py-3 rounded transition text-lg font-semibold px-12">
				Send
			</button>
		</div>
	</form>
);

const ComingSoon2 = () => {
	return (
		<section className="ezy__comingsoon2  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white flex flex-col justify-between p-0 overflow-hidden pt-12">
			<div className="container px-4 flex grow items-center h-full">
				<div className="grid grid-cols-12 justify-center">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center py-12">
						<h2 className="font-bold text-[32px] leading-none md:text-[45px] mb-6">
							Coming Soon
						</h2>
						<p className="text-lg opacity-80 mb-2">
							An activity that requires a person's mental or physical effort is
							work.If a person is trained for a certain type of job, they may
							have a profession. Typically, a job would be a subset of someone's
							career.
						</p>
					</div>
				</div>
			</div>

			<div
				className="py-24 flex items-center min-h-[40vh] bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage:
						"url(https://cdn.easyfrontend.com/pictures/comingsoon/two.png)",
				}}
			>
				<div className="container px-4">
					<div className="grid grid-cols-12 justify-center">
						<div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5">
							<SubscribeForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ComingSoon2;

