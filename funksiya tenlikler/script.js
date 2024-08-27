// 1)funksiyaya operator gonderilmesi

// function show(a,b){
//     return a+b;
// }

// console.log(show(4,3))

// arrydaki ededlerin toplanmasi

// 2)arraydaki ededlerin toplanmasi

// let arr = [2, 5, 7, 8, 5];
//  let sum = 0;
// function show(arr,sum) {

//     for(let i = 0; i <=arr.length-1; i++) {
//         sum += arr[i];

//     }
//     return sum;
// }
//  console.log(show(arr,sum))

// 3) 50ye qeder olan reqemlerin tek olanlarini bos arraya daxil etmek.

// let busy = [];
// function show(busy) {
//   for (let i = 0; i < 50; i++) {
//     if (i % 2 == 1) {
//       busy.push(i);
//     }
//   }
//   console.log(busy);
// }

// show(busy);

// 4) kilometri interaktiv yolla mile cevirmek

// let km= +prompt("km to change miles:")
// let miles = 0.621371192;

// function changer(){
//    let end = km*miles
//    alert(end + ' miles')
// }

//  changer()

// 5) vurma cedveli

// function vurma(){

//     for(let a=1; a<=10; a++){

//       let row =" "

//         for(let b= 1; b<=10; b++){
//             row+= a*b + " "

//         }
//      console.log(row)
//     }

// }
//  vurma()

// 6) ededleri tersine cevir

// let arr = [1,2,3,4,5,6,7,8,9,10]
// function numbers(arr){
//     console.log(arr.reverse())

// }
//  numbers(arr);

// 7) tek ve cut ededlerin ayri arraylara yigilmasi

// let arr = [12, 54, 63, 70, 59, 55, 12, 54, 98, 45, 12, 54, 32, 45, 15];
// let tek = [];
// let cut = [];
// function only(arr, tek, cut) {
//   for (let a = 0; a <= arr.length - 1; a++) {
//     if (arr[a] % 2 == 0) {
//       cut.push(arr[a]);
//     } else if (arr[a] % 2 == 1) {
//       tek.push(arr[a]);
//     }
//   }
//   return { tek, cut };
// }
// console.log(only(arr, tek, cut));
// only(arr, tek, cut);


// 8)sirasiz ededlerin yeni arraya sira ile duzulmesi

// let arr=[1,49,24,78,56,4,36,2,45,98,36,14,91];
// let up=[];
//  function upper(arr,up){
//   for(let a=0; a<arr.length; a++){
//     up.push(arr[a]);
    
    
//   }
//  up.sort((a,b)=>a-b);
//    console.log(up);
//  }

// upper(arr,up);


//9) obyektden funksiya gondererek ad soyad cixarilmasi

// let student={
//     name: 'musa',
//     surname: 'alikov',
//     city: 'baku',
//     address: 'balakhani',
// }

// function getFullName(student){
//     return student.name+ ' '+ student.surname ;
// }
// getFullName(student)
// console.log(getFullName(student))

// function getFullAdress(student){
//     return student.city + ' ' + student.address;
// }
// getFullAdress(student);
// console.log(getFullAdress(student));




// 10) interaktiv ballarin hesablanmasi

// let grade= +prompt('balinizi yazin')

// function personal(grade){
//     if(grade<=50){
//         alert('siz kece bilmediniz');
//     }else if(grade<=90){
//         alert('siz orta netice yigdiniz ')
//     } else if(grade<=100){
//         alert('siz ela netice yigdiniz')
//     }else{
//         alert('qebul edilmeyen reqem tekrar yazin')
//     }
// }
// personal(grade);


// 11) menfi ededleri arraydan cixarmaq

// let numbers=[1,-5, 3,-15,-90, 24,-36, 18, 44];
// let positiv=[];

// function filter(numbers,positiv){
//    for(let a=0; a<numbers.length; a++){
//        if(numbers[a]>0){
//            positiv.push(numbers[a])
//        }
//    }
//    console.log(positiv)
// }

// filter(numbers,positiv);


//12) 10 na bolgunun yoxlanmasi

// let bol= +prompt('ededin 10 a bolgusunu yoxla')
//  let last= bol/10;
//  function procces(bol){
//     if(bol%10==0){
//         alert('bu eded 10 a bolunur'+'        '+ 'cavab: '+ last)
//     }else{
//         alert('bu eded 10 a bolunmur'+'        '+ 'cavab: '+ last)
//     }
//  }

//  procces(bol);

//13) ifadede sait seslerin sayinin tapilmasi

// let wordWar= 'Orta əsrlərdə Azərbaycan deyiləndə Atropatena çarlığının yerləşdiyi, Araz çayından cənuba doğru Urmiya gölü ətrafındakı ərazi nəzərdə tutulurdu. Məsudi və ibn Xordadbeh şimal-şərqdəki Muğan düzünü Azərbaycana aid edir, ancaq başqa coğrafiyaşünaslar isə bu ərazini Azərbaycana daxil etmirdilər. XIII əsrin əvvəllərindən bir qayda olaraq Azərbaycan anlayışı şimala qədər yayılır və onun mənası sürətlə dəyişirdi.'
// let types = ['a','ı','o','u','e','ə','i','ö','ü']

// function find(wordWar,types){
//     let here=0;
//     for(let z=0; z<wordWar.length;z++){
//        if(types.includes(wordWar[z])){
//        here++;
//        }
        
//     }
//    return here
// }
// console.log(find(wordWar, types));
// find(wordWar,types);