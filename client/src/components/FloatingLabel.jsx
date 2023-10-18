/* eslint-disable react/prop-types */


export default function FloatingLabel({ type, name, labelText, defaultValue = ""}) {
  return (
    <div className="relative">
    <input 
    type={type}
    name={name}
    id={name}
    required
    defaultValue={defaultValue}
    className="
    block 
    px-2.5 
    pb-2.5 
    pt-4 
    w-full 
    text-xs
    md:text-sm 
    text-grey800
    dark:text-grey0
    bg-transparent 
    rounded-lg 
    border-[1px] 
    dark:border-grey0 
    appearance-none 
    border-grey800 
    dark:focus:border-primary500
    focus:outline-none 
    focus:ring-0 
    focus:border-primary500 
    peer" placeholder=" " />

    <label htmlFor={name} className="
    capitalize
    
    absolute
    tracking-wider 
    text-xs
    md:text-sm 
    font-semibold
    text-grey800 
    dark:text-grey0  
    duration-300 
    transform 
    -translate-y-4 
    scale-75 
    top-2 
    z-10 
    origin-[0] 
    bg-grey10 
    dark:bg-grey800
    px-2 
    peer-focus:font-semibold
    peer-focus:px-2 
    peer-focus:bg-grey10 
    peer-focus:dark:bg-grey800 
    peer-placeholder-shown:scale-100 
    peer-placeholder-shown:-translate-y-1/2 
    peer-placeholder-shown:top-1/2 
    peer-focus:top-2 
    peer-focus:scale-75 
    peer-focus:-translate-y-4 
    left-1">{labelText}</label>
</div>
  )
}
