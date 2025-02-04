import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

export default function Bounded({
    as: Comp = "section",
    className,
    children,
    ...restProps      
}: BoundedProps){
    return (
       <Comp className={clsx("m-auto relative p-4 md:py-8 md:px-6 lg:py-8 lg:max-w-[1400px]", className)} {...restProps}>
            {children}
       </Comp>
    )
}