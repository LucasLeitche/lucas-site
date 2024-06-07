interface ILogoProps {
  className?: string;
}

export default function Logo({className}: ILogoProps): JSX.Element{
  return(
    <h1 className={`text-3xl lg:text-[2rem] font-bold ${className}`}>
      Lucas<span className="text-accent pl-1">.</span>
    </h1>
  )
}
