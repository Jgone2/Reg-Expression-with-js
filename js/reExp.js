let str = `
010-1234-5678
myemail@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=Avengers
My Lorem Ipsum is simply dummy text of the printing and typesetting industry.
abbcccdddd
`

let regexp = new RegExp('my', '')
console.log(str.match(regexp))
regexp = new RegExp('my', 'g')
console.log(str.match(regexp))
regexp = new RegExp('my', 'gi')
console.log(str.match(regexp))
// 리터럴 정규식
console.log('리터럴 정규식')
regexp = /my/gi
console.log(str.match(regexp))


// 메소드
console.log('메소드')
regexp = /sim/gi
console.log(regexp.test(str))
regexp = /my/gi
console.log(regexp.test(str))
console.log(str.replace(regexp, 'AAA')) // 원본데이터 손상 x
console.log(str)
str = str.replace(regexp, 'AAA')
console.log(str)
regexp = /AAA/gi
str = str.replace(regexp, 'my')
console.log(str)

// 플래그
console.log('플래그')
str = `
010-1234-5678
myemail@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=Avengers
My Lorem Ipsum is simply dummy text of the printing and typesetting industry.
abbcccdddd.
`
regexp = /my/
console.log(str.match(regexp))
regexp = /my/g
console.log(str.match(regexp))
regexp = /my/gi
console.log(str.match(regexp))
console.log(str.match(/my/gi))
console.log(str.match(/./gi)) // 모두 선택
console.log(str.match(/\./gi)) // . 선택
console.log(str.match(/\.$/gim)) // .으로 끝나는 문자열이 있는지 확인하고 .을 배열로 출력

// 패턴
console.log('패턴')
str = `
010-1234-5678
myemail@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=Avengers
My Lorem Ipsum is simply dummy text of the printing and typesetting industry.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록`

let h = `  the hello  world   !

`
console.log(
  str.match(/d$/gm)
)
console.log(
  str.match(/^m/gm)
)
console.log(
  str.match(/^m/gim)
)
console.log(
  str.match(/./g)
)
console.log(
  str.match(/http/g)
)
console.log(
  str.match(/h..p/g)
)
console.log(
  str.match(/sim|t..t/g)
)
console.log(
  str.match(/sim|t..t/) // 먼저 찾아지는 것만 배열로 출력
)
console.log(
  str.match(/https/g)
)
console.log(
  str.match(/https?/g)
)
console.log(
  str.match(/d{2}/g)
)
console.log(
  str.match(/d{2,}/g)
)
console.log(
  str.match(/\w{2,3}/g)
)
console.log(
  str.match(/\b\w{2,3}\b/g)
)
console.log(
  str.match(/[sim]/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\ba{1,}\w/gi)
)
console.log(
  str.match(/\d{1,}/g)
)
console.log(
  str.match(/\s/g)
)
console.log(
  h.match(/\s/g)
)
console.log(
  h.replace(/\s/g, '')
)

str = `
010-1234-5678
myemail@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=Avengers
My Lorem Ipsum is simply dummy text of the printing and typesetting industry.
abbcccdddd
`
console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)