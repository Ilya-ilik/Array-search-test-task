// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

//Первый фильтр
let requiredRange1 = [null, 200];



// можно привести все цены к варианту когда есть цена от и цена до

// если цена от === null, то меняю на 0
// если цена до === null, то меняю на 1_000_000_000

const MAX_NUMBER1 = 1_000_000_000;

if (requiredRange1[0] === null) {
    requiredRange1[0] = 0;
}

if (requiredRange1[1] === null) {
    requiredRange1[1] = MAX_NUMBER1;
}

const courcesWithPrices1 = courses.map(course => {
  const from = course.prices[0] === null ? 0 : course.prices[0]; 
  const to = course.prices[1] === null ? MAX_NUMBER1 : course.prices[1];
  
  return {
    name: course.name,
    prices: [from, to]
  }
})

//  price         [-----------------------]
//  range  [--] [---]  [------]     [--------]  [--------]
 

const filteredCourses1 = courcesWithPrices1.filter(({prices}) => {
  const firstVariant = requiredRange1[0] <= prices[0] && prices[0] <= requiredRange1[1];
  const secondVariant = requiredRange1[0] >= prices[0] && requiredRange1[1] <= prices[1];
  const thirdVariant = requiredRange1[0] <= prices[1] && prices[1] <= requiredRange1[1];
  
  return firstVariant,  secondVariant,  thirdVariant;
})

let itog1 = filteredCourses1.map(course => course.name) 
console.log(itog1) 
//Первый вывод в консоли это результат фильтрации requiredRange1
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Второй фильтр
let requiredRange2 = [100, 350];

const MAX_NUMBER2 = 1_000_000_000;

if (requiredRange2[0] === null) {
    requiredRange2[0] = 0;
}

if (requiredRange2[1] === null) {
    requiredRange2[1] = MAX_NUMBER2;
}

const courcesWithPrices2 = courses.map(course => {
    const from = course.prices[0] === null ? 0 : course.prices[0]; 
    const to = course.prices[1] === null ? MAX_NUMBER2 : course.prices[1];
    
    return {
      name: course.name,
      prices: [from, to]
    }
  })

  const filteredCourses2 = courcesWithPrices1.filter(({prices}) => {
    const firstVariant = requiredRange2[0] <= prices[0] && prices[0] <= requiredRange2[1];
    const secondVariant = requiredRange2[0] >= prices[0] && requiredRange2[1] <= prices[1];
    const thirdVariant = requiredRange2[0] <= prices[1] && prices[1] <= requiredRange2[1];
    
    return firstVariant,  secondVariant,  thirdVariant;
  })

  let itog2 = filteredCourses2.map(course => course.name) 
console.log(itog2) 
//Второй вывод в консоли это результат фильтрации requiredRange2
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Третий фильтр
let requiredRange3 = [200, null];

const MAX_NUMBER3 = 1_000_000_000;

if (requiredRange3[0] === null) {
    requiredRange3[0] = 0;
}

if (requiredRange3[1] === null) {
    requiredRange3[1] = MAX_NUMBER3;
}

const courcesWithPrices3 = courses.map(course => {
    const from = course.prices[0] === null ? 0 : course.prices[0]; 
    const to = course.prices[1] === null ? MAX_NUMBER3 : course.prices[1];
    
    return {
      name: course.name,
      prices: [from, to]
    }
  })

  const filteredCourses3 = courcesWithPrices1.filter(({prices}) => {
    const firstVariant = requiredRange3[0] <= prices[0] && prices[0] <= requiredRange3[1];
    const secondVariant = requiredRange3[0] >= prices[0] && requiredRange3[1] <= prices[1];
    const thirdVariant = requiredRange3[0] <= prices[1] && prices[1] <= requiredRange3[1];
    
    return firstVariant,  secondVariant,  thirdVariant;
  })

  let itog3 = filteredCourses3.map(course => course.name) 
console.log(itog3) 
//Третий вывод в консоли это результат фильтрации requiredRange3
/////////////////////////////////////////////////////////////////////////////////////////////////////





