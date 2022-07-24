
 let url="d771f93b9d98470d7a0797cdaeb50ed0";
 let ar=new Array();
 async function weather(){
     let cityName = document.getElementById("name").value;
     let graphName=document.getElementById("graph").value;
     let result = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${url}&units=metric`);
     let  data=await result.json();
     console.log(data);
    let i=0,k=0;
    for(i=0;i<40;i=i+8){
        let a=data['list'][i]['main']['temp'];
        let b=data['list'][i+1]['main']['temp'];
        let c=data['list'][i+2]['main']['temp'];
        let d=data['list'][i+3]['main']['temp'];
        let e=data['list'][i+4]['main']['temp'];
        let f=data['list'][i+5]['main']['temp'];
        let g=data['list'][i+6]['main']['temp'];
        let h=data['list'][i+7]['main']['temp'];

        avg=(a+b+c+d+e+f+g+h)/8;
        ar[k++]=avg
    }
    console.log(ar);

    function graph(){
        
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: graphName,
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                datasets: [{
                    label: '# of Votes',
                    data: ar,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });}
        submit.addEventListener("click",graph());
        document.getElementById("back").style.backgroundColor="white";
    }
