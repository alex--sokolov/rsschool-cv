<h1 align="center">Sokolov Alexander</h1>
<h2 align="center"> Junior Frontend Developer</h2>

<hr>
<h6>email: thorpe.nulled@gmail.com</h6>
<h6>diskord: @Alexader Sokolov#9778 <br></h6>

<hr>

<h2>About me</h2>

I graduated from Kaliningrad State Technical University in 2007.
<br>
Since 2008 I've been having my own business. It started from bringing different computer services to local companies,
<br>
design and laying of computer networks, building different websites. Later it transformed to internet-shop, that sells computer stuff.
<br>
Since 2020 I decided to change my current activity, and as far as I've been developing websites for many years, 
<br>
I realized, that I want to become a web developer. So, I made my own personal learning plan 
<br>
and started to learn all new necessary technologies to become a front-end developer.
 
<h2>Skills</h2>

+ HTML5
+ CSS3
+ JavaScript
+ TypeScript
+ React
+ Redux

<h2>Code sample</h2>
```
export const Timer = (props: TimerPropsType) => {
       const [timerValue, setTimerValue] = useState<number>(props.seconds)
   
       useEffect(() => {
           setTimerValue(props.seconds)
       }, [props.seconds])
   
       useEffect(() => {
           props.onChangeSeconds(timerValue)
       }, [timerValue])
   
       useEffect(() => {
           const intervalId = setInterval(() => {
               setTimerValue((prev) => prev - 1)
           }, 1000)
   
           return () => {
               clearInterval(intervalId)
           }
       }, [props.timerKey])
       return (
           <>
               {timerValue &&
               <div className="timer">{timerValue}</div>
               }
           </>
       )
   }
   
```
<h2>Projects</h2>

  - [PROXYS.RU](https://www.proxys.ru)
  - [LINZI39.RU](https://www.linzi39.ru)

<h2>Education</h2> 

Period of study | Institution name
------------ | -------------
2002-2007 | Kaliningrad State Technical University (speciality: computing machines, complex system and network)
2008-2020 | Self education (youtube, official documentations)
2021 | RS school
    
<h2>Language</h2>

 - English B2+ (I had an experience of participating in an exchange program, 
 where I lived with an English family and studied English in Folkestone, Great Britain. 
 Also I've been 3 times to USA, participating in student exchange program)
