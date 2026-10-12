const destinations = [
 { name:"Statue of Unity", state:"Gujarat", category:"Monument", ticketPrice:150, rating:4.8, visitors:95000, popular:true },
 { name:"Taj Mahal", state:"Uttar Pradesh", category:"Monument", ticketPrice:250, rating:4.9, visitors:150000, popular:true },
 { name:"Goa Beach", state:"Goa", category:"Beach", ticketPrice:0, rating:4.5, visitors:120000, popular:true },
 { name:"Gir National Park", state:"Gujarat", category:"Wildlife", ticketPrice:800, rating:4.6, visitors:45000, popular:false },
 { name:"Hawa Mahal", state:"Rajasthan", category:"Monument", ticketPrice:100, rating:4.3, visitors:70000, popular:true },
 { name:"Manali", state:"Himachal Pradesh", category:"Hill Station", ticketPrice:0, rating:4.7, visitors:110000, popular:true },
 { name:"Rann of Kutch", state:"Gujarat", category:"Nature", ticketPrice:100, rating:4.4, visitors:60000, popular:false },
 { name:"Mysore Palace", state:"Karnataka", category:"Palace", ticketPrice:120, rating:4.6, visitors:85000, popular:true }
];

// 1.	Use map() and indexOf() to find the position of Taj Mahal in destination names.
    var name = destinations.map((e)=>e.name);
    console.log("position of Taj Mahal: "+name.indexOf('Taj Mahal'));

// 2.	Use map() and includes() to check whether Goa Beach and Ladakh are present.
    console.log(name.includes("Goa Beach"));
    console.log(name.includes("Ladakh"));

// 3.	Use slice(2, 6) to create a new array containing destination entries at indexes 2 through 5.
    var subArray = destinations.slice(2,6);
    // console.log(subArray);

// 4.	Find Gir National Park using findIndex() and remove it using splice(). Display the removed entry and updated array.
    var index = subArray.findIndex(e=>e.name==='Gir National Park');
    var removed = subArray.splice(index,1);
    console.log(removed);
    console.log(subArray.length);

// 5.	Create a second array with Red Fort (Delhi, Monument, price 50, rating 4.5) and Ooty (Tamil Nadu, Hill Station, price 0, rating 4.2). Combine using concat().
    var RedFort = [
        {
            name:'Delhi',
            state:'Monument',
            ticketPrice:50,
            rating:4.5
        },
        {
            name:'tamil Nadu',
            state:'Hill Station',
            ticketPrice:0,
            rating:4.2
        }
    ]
    const newdestination=destinations.concat(RedFort);
    console.log(newdestination.length);

// 6.	Create a names array using map(), then join names with " | ".
    var names = newdestination.map(p=>p.name);
    console.log(names.join(' | '));

// 7.	Sort a copy alphabetically by name without changing the original.
    var alphabetically = [...newdestination].sort((a,b)=>a.name.localeCompare(b.name));//•	Use [...array].sort(...) when you need to preserve the original array. 
    console.log(alphabetically.map(p=>p.name));
    console.log(newdestination);

// 8.	Sort a copy by ticketPrice ascending and another copy by rating descending.
    var ticketpriceasc = [...newdestination].sort((a,b)=>a.ticketPrice-b.ticketPrice);
    console.log(ticketpriceasc.map(e=>(e.name+' '+e.ticketPrice)));
    var ratingdesc = [...newdestination].sort((a,b)=>b.rating-a.rating);
    console.log(ratingdesc.map(e=>e.name+' '+e.rating));

// 9.	Use map() to create objects containing only name, state and rating.
    var newsubArray = newdestination.map(({name,state,rating})=>({name,state,rating}));
    console.log(newsubArray);

// 10.	Use filter() for rating above 4.5, ticketPrice below 200, Gujarat destinations, popular destinations and monuments.
    var filterarray = newdestination.filter(e=>e.rating>4.5);
    var filterarray2 = newdestination.filter(e=>e.ticketPrice<200);
    var filterarray3 = newdestination.filter(e=>e.state==='Gujarat');
    var filterarray4 = newdestination.filter(e=>e.popular);
    var filterarray5 = newdestination.filter(e=>e.category==='Monument');
    console.log(filterarray,filterarray2,filterarray3,filterarray4,filterarray5);
    
// 11.	Use reduce() to calculate total visitors, average rating and number of popular destinations.
    var totalvisitor = newdestination.reduce((sum,p)=>{
        return sum+(p.visitors??0)
    },0)
    console.log(totalvisitor);
    var avgrating = newdestination.reduce((sum,p)=>{
        return p.rating+sum;
    },0);
    console.log(avgrating/newdestination.length);
    var populardest = newdestination.reduce((count,p)=>{
        if((p.popular||0)===true){
            return ++count;
        }
        return count;
    },0)
    console.log(populardest);
    

// 12.	Use forEach() to print each destination as Name — State — Rating.
    newdestination.forEach(e=>{
        console.log(e.name+ " " + e.state + " "+ e.rating);
    })
// 13.	Challenge: Select popular destinations rated above 4.5, sort by rating descending, keep top 3, and display name and rating.
    var f1 = newdestination.filter((e)=>{
        if(e.rating>4.5){
            return e;
        }
    }).sort((a,b)=>b.rating-a.rating).slice(0,3);
    console.log(f1.map(e=>e.name+' '+e.rating));
    
