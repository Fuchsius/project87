import React from 'react'

export default function MainButton({ type, text, size, className }: { type: string, text: string, size: string, className?: string }) {



  const buttonSize = () => {
    switch (size) {
      case "default":
        return "h-9 py-2";
      case "sm":
        return "h-8 rounded-md px-3 text-xs";
      case "md":
        return "h-10 px-4 text-sm";
      case "lg":
        return "py-3 px-8";
      case "icon":
        return "h-9 w-9";
      default:
        return "";
    }
  }

  return (
    <>
      {type === "default" && (
        <button className={`bg-myred text-white hover:shadow-lg transition-all hover:shadow-myred/50 duration-200 hover:brightness-90 ${buttonSize()} ${className}`}>{text}</button>
      )}
      {type === "destructive" && (
        <button className={`bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/95 ${buttonSize()} ${className}`}>{text}</button>
      )}
      {type === "outline" && (
        <button className={`border-2 text-myred border-myred bg-background shadow-sm hover:shadow-lg hover:shadow-myred/50 transition-all duration-200 ${buttonSize()} ${className}`}>{text}</button>
      )}
      {type === "secondary" && (
        <button className={`bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 ${buttonSize()} ${className}`}>{text}</button>
      )}
      {type === "ghost" && (
        <button className={`hover:bg-accent hover:text-accent-foreground ${buttonSize()} ${className}`}>{text}</button>
      )}
      {type === "link" && (
        <button className={`text-primary underline-offset-4 hover:underline ${buttonSize()} ${className}`}>{text}</button>
      )}
    </>

  )
}
