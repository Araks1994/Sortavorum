new Vue(
    {
        el:"#cank",
        data:{
            Cucak:[
                    
                {name:"Ani",surname:"Martirosyan",age:25,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Lilit",surname:"Qocharyan",age:20,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Lianna",surname:"Haroyanyan",age:35,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Anna",surname:"Hovhannisyan",age:15,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Lusine",surname:"Eghiazaryan",age:18,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Leo",surname:"Harutyunyan",age:5,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Vahe",surname:"Grigoryan",age:45,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Samvel",surname:"Martirosyan",age:13,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Anul",surname:"Karapetyan",age:23,skills: ["C#", "WPF", "ADO.NET"]},
                {name:"Ashot",surname:"Aharonyan",age:50,skills: ["C#", "WPF", "ADO.NET"]},
    
                
        ]
        },
        methods:{
        anun:function(){
           
           this.Cucak.sort((a, b) => (a.name > b.name) ? 1 : -1);
         
         },
         azganun:function(){
            this.Cucak.sort((a, b) => (a.surname > b.surname) ? 1 : -1);
          

        },
        tariq:function(){
            this.Cucak.sort((a, b) => (a.age > b.age) ? 1 : -1);

        }

        }
        
    

    
       
        
       
        
    
    })