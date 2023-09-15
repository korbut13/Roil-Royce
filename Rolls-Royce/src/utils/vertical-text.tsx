export default function verticalText(text:string){
  const arr = text.split("");
  return (
    <>
      {arr.map((letter:string, id:number) => {
        return (<span key={id}>{letter}</span>)
      })}
    </>
  )
}
