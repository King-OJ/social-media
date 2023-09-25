

// eslint-disable-next-line react/prop-types
export default function Adverts({img}) {
  return (
    <article className="bg-grey10 dark:bg-grey800 shadow-lg rounded-md p-3 space-y-4 w-full">
          <div className="flex justify-between items-center">
            <h6 className="text-base font-bold">Sponsored</h6>
            <a href="" className="text-sm font-bold">Create Ad</a>
          </div>

          <div className="space-y-3">
            <div className="h-56 w-full rounded-md overflow-hidden">
              <img src={img} alt="" className="object-cover object-center h-full w-full"/>
            </div>

            <div className="flex justify-between items-center flex-wrap">
              <h6 className="text-sm font-bold">Clem Cosmetics</h6> 
              <a href="" className="text-xs text-grey400 dark:text-grey200">clemcosmetics.com</a>
            </div>

            <p className="text-sm text-grey400 dark:text-grey200">Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellat est possimus vitae quos iure atque autem magni suscipit eveniet rerum, nesciunt distinctio reprehenderit, assumenda similique quia ad tenetur non.</p>
          </div>
        </article>
  )
}
