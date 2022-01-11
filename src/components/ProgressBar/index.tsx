import { useEffect, useState } from "react";
import { Bar, Progress } from "./styles";

interface ProgressbarProps{
    velocidade:number;
    onComplete():void;
}

export function Progressbar({velocidade,onComplete}:ProgressbarProps) {
  const [progressWidth, setProgressWidth] = useState("");
  var i = 0;
  useEffect(()=>{   
        if (i == 0) {
          i = 1;
          var width = 1;
          var id = setInterval(() => {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
              onComplete();
            } else {
              width=width+velocidade;
              setProgressWidth(width + "%");
            }
          }, 10);
        }
  },[])
  return (
    <Bar>
      <Progress style={{ width: progressWidth }}></Progress>
    </Bar>
  );
}
