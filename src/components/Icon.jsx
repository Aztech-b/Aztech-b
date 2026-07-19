function Icon({ icon, label }) {
	return (
		<div
			className={
				"flex justify-center items-center flex-col gap-1.5 hover:scale-[1.2] transition-all duration-75 ease-linear"
			}
		>
			{icon}
			{label}
		</div>
	);
}

export default Icon;
