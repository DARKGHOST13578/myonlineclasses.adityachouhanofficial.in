                                        //THIS IS CODE SCTRUCTURE OF MY ONLINE CLASS LINKS//   
                                        setInterval(showTime, 1);
                                        setInterval(text, 1);
                                        setInterval(bgi, 1000);
                                        setInterval(notifyme, 1);
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        //PREVENT KEYCODES
                                        document.onkeydown = function(event)
                                            {
                                            if(event.keyCode==123)
                                            {
                                                alert('YOU CANNOT ACESS THE SOURCE CODE');
                                                return false;
                                            }   
                                            else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
                                            {
                                                alert('YOU CANNOT ACESS THE SOURCE CODE')
                                                return false;  //Prevent from ctrl+shift+i
                                            }
                                            else if(event.ctrlKey  && event.keyCode==73)
                                            {
                                                alert('YOU CANNOT ACESS THE SOURCE CODE')
                                                return false;  //Prevent from ctrl+i
                                            }
                                            else if (event.ctrlKey && event.shiftKey && event.keyCode==74) {
                                                alert('YOU CANNOT ACESS THE SOURCE CODE')
                                                return false; //Prevent from ctrl+shift+j
                                            }
                                            else if (event.ctrlKey && event.shiftKey && event.keyCode==67) {
                                                alert('YOU CANNOT ACESS THE SOURCE CODE')
                                                return false; //Prevent from ctrl+shift+c
                                            }
                                            else if (event.ctrlKey && event.keyCode==85) {
                                                alert('YOU CANNOT ACESS THE SOURCE CODE')
                                                return false; //Prevent from ctrl+u
                                            }
                                            else if (event.ctrlKey && event.keyCode==83) {
                                                alert('YOU CANNOT SAVE THIS BRUH IF YOU WANT TO SAVE, ASK PERMISSION FROM ADITYA')
                                                return false; //Prevent from ctrl+s
                                            }
                                        };
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        //PREVENT RIGHT CLICK
                                        document.oncontextmenu = function(e)
                                        {
                                            alert('RIGHT CLICK NOT ALLOWED')
                                            return false;
                                            e.preventDefault()
                                        }
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        //SHOWTIME
                                                function showTime() {
                                                    let time = new Date();
                                                    let hour = time.getHours();
                                                    let min = time.getMinutes();
                                                    let sec = time.getSeconds();
                                                    am_pm = "AM";
                                          
                                                    if (hour > 12) {
                                                        hour -= 12;
                                                        am_pm = "PM";
                                                    }
                                                    if (hour == 0) {
                                                        hr = 12;
                                                        am_pm = "AM";
                                                    }
                                          
                                                    hour = hour < 10 ? "0" + hour : hour;
                                                    min = min < 10 ? "0" + min : min;
                                                    sec = sec < 10 ? "0" + sec : sec;
                                          
                                                    let currentTime = hour + ":" 
                                                        + min + ":" + sec + am_pm;  
                                          
                                                    document.getElementById("clock")
                                                        .innerHTML = currentTime;
                                        
                                        }
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        //CLASSES
                                                function text() {
                                            var n = new Date();
                                            var y = n.getFullYear();
                                            var m = n.getMonth() + 1;
                                            var d = n.getDate();
                                            var hours = n.getHours();
                                            var minutes = n.getMinutes();
                                            var dayOfWeekNumber = n.getDay();
                                        
                                        //SUNDAY
                                           if (dayOfWeekNumber == 0) {
                                            document.getElementById("all").innerHTML = ""
                                            document.getElementById("classes").href = ""
                                            document.getElementById("ID").innerHTML = ""
                                            document.getElementById("PW").innerHTML = ""
                                           } 
                                        
                                           else{
                                        
                                        
                                        //TUTION 1
                                                   if (hours == 5 && minutes > 30) {
                                            document.getElementById("all").innerHTML = "TUTION STUDY HOURS TIMINGS 5:30 AM TO 7:00 AM"
                                            document.getElementById("classes").href = "https://us02web.zoom.us/j/3883317582?pwd=QmNRNk5FU0l0VkwxaWVPbnFaVi9PZz09"
                                            document.getElementById("ID").innerHTML = "THE MEETING ID IS = 388 331 7582"
                                            document.getElementById("PW").innerHTML = "THE MEETING PASSWORD IS = 328882h"
                                            document.getElementById("no").innerHTML = ""
                                          }
                                        
                                           else if (hours == 6) {
                                            document.getElementById("all").innerHTML = "TUTION STUDY HOURS TIMINGS 5:30 AM TO 7:00 AM"
                                            document.getElementById("classes").href = "https://us02web.zoom.us/j/3883317582?pwd=QmNRNk5FU0l0VkwxaWVPbnFaVi9PZz09"
                                            document.getElementById("ID").innerHTML = "THE MEETING ID IS = 388 331 7582"
                                            document.getElementById("PW").innerHTML = "THE MEETING PASSWORD IS = 328882h"
                                            document.getElementById("no").innerHTML = ""
                                          }
                                        
                                          else if (hours == 7 && minutes < 30) {
                                            document.getElementById("all").innerHTML = "TUTION STUDY HOURS TIMINGS 5:30 AM TO 7:00 AM"
                                            document.getElementById("classes").href = "https://us02web.zoom.us/j/3883317582?pwd=QmNRNk5FU0l0VkwxaWVPbnFaVi9PZz09"   
                                            document.getElementById("ID").innerHTML = "THE MEETING ID IS = 388 331 7582"
                                            document.getElementById("PW").innerHTML = "THE MEETING PASSWORD IS = 328882h"
                                            document.getElementById("no").innerHTML = ""
                                          }
                                        
                                        
                                        
                                        //SCHOOL
                                         
                                          else if (hours > 9 && hours < 17) {
                                            document.getElementById("all").innerHTML = "SCHOOL STARTED (OFFLINE CLASSES)"
                                            document.getElementById("classes").href = ""
                                            document.getElementById("ID").innerHTML = ""
                                            document.getElementById("PW").innerHTML = ""
                                            document.getElementById("no").innerHTML = ""
                                          }
                                        
                                        //TUTION 2
                                                   else if (hours == 18 ) {
                                            document.getElementById("all").innerHTML = "TUTION CLASS TIMINGS 6:00 PM TO 8:30 PM"
                                            document.getElementById("classes").href = "https://us02web.zoom.us/j/3883317582?pwd=QmNRNk5FU0l0VkwxaWVPbnFaVi9PZz09"
                                            document.getElementById("ID").innerHTML = "THE MEETING ID IS = 388 331 7582"
                                            document.getElementById("PW").innerHTML = "THE MEETING PASSWORD IS = 328882h"
                                            document.getElementById("no").innerHTML = ""
                                          }
                                          
                                           else if (hours == 19) {
                                            document.getElementById("all").innerHTML = "TUTION CLASS TIMINGS 6:00 PM TO 8:30 PM"
                                            document.getElementById("classes").href = "https://us02web.zoom.us/j/3883317582?pwd=QmNRNk5FU0l0VkwxaWVPbnFaVi9PZz09"
                                            document.getElementById("ID").innerHTML = "THE MEETING ID IS = 388 331 7582"
                                            document.getElementById("PW").innerHTML = "THE MEETING PASSWORD IS = 328882h"
                                            document.getElementById("no").innerHTML = ""
                                          }
                                        
                                           else if (hours == 20 && minutes < 31) {
                                            document.getElementById("all").innerHTML = "TUTION CLASS TIMINGS 6:00 PM TO 8:30 PM"
                                            document.getElementById("classes").href = "https://us02web.zoom.us/j/3883317582?pwd=QmNRNk5FU0l0VkwxaWVPbnFaVi9PZz09"
                                            document.getElementById("ID").innerHTML = "THE MEETING ID IS = 388 331 7582"
                                            document.getElementById("PW").innerHTML = "THE MEETING PASSWORD IS = 328882h"
                                            document.getElementById("no").innerHTML = ""
                                          }
                                        
                                        
                                        
                                        
                                        
                                        //NO
                                           else {
                                            document.getElementById("all").innerHTML = ""
                                            document.getElementById("classes").href = ""
                                            document.getElementById("no").innerHTML = "NO CLASS IS STREAMING NOW"
                                            document.getElementById("ID").innerHTML = ""
                                            document.getElementById("PW").innerHTML = ""
                                              }
                                        }
                                        
                                        //WEEKS
                                           if (dayOfWeekNumber == 0) {
                                            document.getElementById("weekday").innerHTML = d + "-" + m + "-" + y + " SUNDAY"
                                            document.getElementById("phrase").innerHTML = "“Your time is limited, so don't waste it living someone else's life.” -Steve Jobs"
                                           }
                                        
                                           else if (dayOfWeekNumber == 1) {
                                            document.getElementById("weekday").innerHTML = d + "-" + m + "-" + y + " MONDAY"
                                            document.getElementById("phrase").innerHTML = "“Everyone lives by selling something.” -Robert Louis Stevenson"
                                        }  
                                        
                                           else if (dayOfWeekNumber == 2) {
                                            document.getElementById("weekday").innerHTML = d + "-" + m + "-" + y + " TUESDAY"
                                            document.getElementById("phrase").innerHTML = "“You always pass failure on the way to success.” -Mickey Rooney"
                                        }
                                        
                                           else if (dayOfWeekNumber == 3) {
                                            document.getElementById("weekday").innerHTML = d + "-" + m + "-" + y + " WEDNESDAY"
                                            document.getElementById("phrase").innerHTML = "“Wherever you go, no matter what the weather, always bring your own sunshine.” -Anthony J. D’Angelo"
                                        }
                                        
                                           else if (dayOfWeekNumber == 4) {
                                            document.getElementById("weekday").innerHTML = d + "-" + m + "-" + y + " THURSDAY"
                                            document.getElementById("phrase").innerHTML = "“No one is perfect - that’s why pencils have erasers.” -Wolfgang Riebe"
                                        }
                                        
                                           else if (dayOfWeekNumber == 5) {
                                            document.getElementById("weekday").innerHTML = d + "-" + m + "-" + y + " FRIDAY"
                                            document.getElementById("phrase").innerHTML = "“It always seems impossible until it is done.” -Nelson Mandela"
                                        }
                                        
                                           else if (dayOfWeekNumber == 6) {
                                            document.getElementById("weekday").innerHTML = d + "-" + m + "-" + y + " SATURDAY"
                                            document.getElementById("phrase").innerHTML = "“The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.” -Charles Dickens"
                                        }
                                        
                                        
                                        }
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        function notifyme() {
                                            var n = new Date();
                                            var hours = n.getHours();
                                            var minutes = n.getMinutes();
                                            var seconds = n.getSeconds();
                                                   
                                        
                                        //Notify
                                        
                                           if (hours == 5 && minutes == 30 && seconds == 0) {
                                                 notify();
                                          }
                                        
                                            else if (hours == 9 && minutes == 0 && seconds == 0) {
                                                 notify();
                                           } 
                                        
                                           else if (hours == 9 && minutes == 50 && seconds == 0) {
                                                 notify();
                                           }
                                        
                                           else if (hours == 10 && minutes == 40 && seconds == 0) {
                                                 notify();
                                           }
                                        
                                           else if (hours == 11 && minutes == 30 && seconds == 0) {
                                                 notify();
                                           }
                                        
                                           else if (hours == 13 && minutes == 30 && seconds == 0) {
                                                 notify();
                                           }
                                        
                                           else if (hours == 14 && minutes == 20 && seconds == 0) {
                                                 notify();
                                           }
                                        
                                           else if (hours == 15 && minutes == 10 && seconds == 0) {
                                                 notify();
                                           }
                                        
                                           else if (hours == 18 && minutes == 0 && seconds == 0) {
                                                 notify();
                                          };}
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        //LOGIN CODE
                                        function logined() {
                                            const rmCheck = document.getElementById("rememberMe");
                                            var emailInput = document.getElementById("user");
                                            var psInput = document.getElementById("pd");
                                            var name = document.getElementById("user").value;
                                            var pd = document.getElementById("pd").value;
                                        
                                            if (rmCheck.checked && emailInput.value !== "") {
                                              localStorage.username = emailInput.value;
                                              localStorage.checkbox = rmCheck.value;
                                              localStorage.password = psInput.value;
                                            }
                                            else {
                                              localStorage.username = "";
                                              localStorage.checkbox = "";
                                              localStorage.password = "";
                                            }
                                        
                                            if (name == "aditya" && pd == "13578") {
                                                document.getElementById('id01').style.display = "none"
                                                document.getElementById('bod').style.filter = ""
                                            }
                                            else if (name == "tushartej" && pd == "123456789") {        
                                                document.getElementById('id01').style.display = "none"
                                                document.getElementById('bod').style.filter = ""
                                            }
                                            else if (name == "ramcharan" && pd == "123456") {        
                                                document.getElementById('id01').style.display = "none"
                                                document.getElementById('bod').style.filter = ""
                                            }
                                            else if (name == "mineboy1461" && pd == "RAHUL2009") {        
                                                document.getElementById('id01').style.display = "none"
                                                document.getElementById('bod').style.filter = ""
                                            }  
                                            else if (name == "mineboy1461" && pd == "RAHUL2009") {        
                                                document.getElementById('id01').style.display = "none"
                                                document.getElementById('bod').style.filter = ""
                                            }
                                            else if (name == "" && pd == "") {
                                                alert('PLEASE FILL OUT BOTH USERNAME FIELD AND PASSWORD FIELD IF YOU WANT TO LOGIN CONTACT ADITYA')
                                            }
                                            else if (name == "") {
                                                alert('PLEASE FILL OUT USERNAME FIELD')
                                            } 
                                            else if (pd == "") {
                                                alert('PLEASE FILL OUT PASSWORD FIELD')
                                            }
                                            else {
                                                alert('LOGIN FAILED')
                                            }   
                                        }
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        //NOTIFY
                                        function notify() {
                                            var n = new Date();
                                            var y = n.getFullYear();
                                            var m = n.getMonth() + 1;
                                            var d = n.getDate();
                                            var hours = n.getHours();
                                            var minutes = n.getMinutes();
                                            var dayOfWeekNumber = n.getDay();
                                            const notification = new Notification("CLASS STARTED!", {
                                                body: "JOIN YOUR CLASS SOON",
                                                icon: "A.jpg",
                                        
                                            });
                                        
                                        
                                        
                                           if (hours == 5 && minutes > 30) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                          }
                                        
                                            else if (hours == 9) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                           } 
                                        
                                           else if (hours == 9 && minutes > 50) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                           }
                                        
                                           else if (hours == 10 && minutes > 40) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                           }
                                        
                                           else if (hours == 11 && minutes > 30) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                           }
                                        
                                           else if (hours == 13 && minutes > 30) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                           }
                                        
                                           else if (hours == 14 && minutes > 20) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                           }
                                        
                                           else if (hours == 15 && minutes > 10) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                           }
                                           
                                           else if (hours == 18 && minutes == 0) {
                                                 notification.onclick = (e) => {
                                           window.location.href = "";}
                                          }
                                        
                                            };
                                        
                                        
                                        
                                        
                                        
                                        

                                        //BACKGROUND                
                                        function bgi() {
                                        const myArray = ['url(https://uhdwallpapers.org/uploads/converted/18/04/08/spider-man-game-on-ps4-1280x720_59684-rm-90.jpg)', 'url(https://wallpaperaccess.com/full/2918041.jpg)','url(https://wallpaperaccess.com/full/1078199.jpg)','url(https://wallpaperaccess.com/full/2918083.jpg)','url(https://wallpaperaccess.com/full/3971879.jpg)','url(https://images.thedirect.com/media/article_full/shang-chi-review-mcu.jpg)','url(https://www.wallpapermaiden.com/wallpaper/5014/download/1280x720/nebula-orange-stars-blue-galaxy.jpg)','url(https://wallpapercave.com/wp/5DLxd55.jpg)','url(https://i.pinimg.com/originals/4a/bc/87/4abc87674cc96513e370193e116e2044.jpg)','url(https://cutewallpaper.org/21/wallpaper-1280x720/62+-1280x720-HD-Desktop-Wallpapers-WallpaperYou.jpg)','url(https://f.vividscreen.info/soft/23637fb504303a2d5ec5516075aecc3b/Cloudy-Night-And-Sparkling-Moon-1280x720.jpg)','url(https://wallpapercave.com/wp/wp4470731.jpg)','url(https://cdn.wallpapersafari.com/77/35/Bgc7YM.jpg)','url(https://wallpaperaccess.com/full/1796681.jpg)','url(https://www.hdwallpapers.in/thumbs/2020/fantasy_dragon_with_a_boy_in_a_sky_star_background_hd_dreamy-t2.jpg)','url(https://wallpaperaccess.com/full/5081824.jpg)','url(https://wallpaperaccess.com/full/1078214.jpg)','url(https://images.wallpapersden.com/image/wxl-color-explosion_63941.jpg)','url(https://thedirect.s3.amazonaws.com/media/article_full/loki-disney-plus-tva-mcu-marvel.jpg)','url(https://wallpaperaccess.com/full/302800.jpg)','url(https://wallpaperaccess.com/full/930558.jpg)','url(https://i.redd.it/pu0jj25bclg61.jpg)','url(https://wallpaper.dog/large/10941597.jpg)','url(https://wallpaperaccess.com/full/2040737.jpg)','url(https://wallpaperaccess.com/full/930558.jpg)','url(https://images.wallpapersden.com/image/download/red-eclipse-digital-art_bGlqaGqUmZqaraWkpJRmZ21lrWxnZQ.jpg)','url(https://wallpapercave.com/wp/wp4470734.jpg)','url(https://wallpapercave.com/wp/wp4470747.jpg)','url(https://cdnb.artstation.com/p/assets/images/images/012/987/297/large/jacques-munezero-car-version-2-19.jpg)','url(https://www.teahub.io/photos/full/87-871740_hd-wallpapers-hd-1280-x-720.jpg)','url(https://images.hdqwalls.com/download/2021-tesla-roadster-5k-7z-1280x720.jpg)','url(https://uhdwallpapers.org/uploads/converted/18/05/24/abstract-3d-blue-vs-red-1280x720_54564-mm-90.jpg)','url(https://wallpapercave.com/wp/wp4470728.jpg)','url(https://wallpaperaccess.com/full/1078161.jpg)','url(https://images.wallpapersden.com/image/download/zenitsu-agatsuma-demon-slayer_a2xuaG6UmZqaraWkpJRmZ21lrWxnZQ.jpg)','url(https://wallpaperaccess.com/full/2040736.jpg)','url(https://cutewallpaper.org/21/blue-dragon-wallpapers/Cool-Fantasy-Red-Blue-Dragons-Wallpapers-Full-HD-Backgrounds.jpg)','url(https://images.wallpapersden.com/image/download/multi-colors-4k-art_a2lsa2qUmZqaraWkpJRmZ21lrWxnZQ.jpg)','url(https://images.hdqwalls.com/download/robo-science-fiction-4k-08-1280x720.jpg)','url(https://eskipaper.com/images/beautiful-sunset-wallpaper-3.jpg)','url(https://wallpaperaccess.com/full/2568960.jpg)','url(https://images.hdqwalls.com/download/hexagon-blender-4k-22-1280x720.jpg)','url(https://pxwall.com/wp-content/uploads/2019/04/Game-of-Thrones-HD-Background.jpg)','url(https://images.wallpapersden.com/image/download/huawei-4k-stock-abstract_a2toaGuUmZqaraWkpJRmZ21lrWxnZQ.jpg)','url(https://images.hdqwalls.com/download/retro-big-sunset-5k-9t-1280x720.jpg)','url(https://eskipaper.com/images/cool-1.jpg)','url(https://wallpaperaccess.com/full/1078157.jpg)','url(https://www.teahub.io/photos/full/10-100596_avengers-4k.jpg)','url(https://images.thedirect.com/media/article_full/avengers-5-characters-shang-chi.jpg)','url(https://sm.ign.com/t/ign_in/news/m/marvels-et/marvels-eternals-first-teaser-trailer-released_tqak.h720.jpg)','url(https://c4.wallpaperflare.com/wallpaper/287/620/954/hulk-avengers-age-of-ultron-the-avengers-wallpaper-preview.jpg)','url(https://wallpaperaccess.com/full/884120.jpg)','url(https://www.teahub.io/photos/full/282-2826844_avengers-infinity-war-wallpapers-free-download-high-avengers.jpg)','url(https://cdn.wallpapersafari.com/28/7/yk6xpB.jpg)','url(https://images.firstpost.com/wp-content/uploads/2019/06/square-enix-marvels-avengers.jpg)','url(https://cdn.wallpapersafari.com/62/55/qbnHzw.jpg)','url(https://www.thenewsfetcher.com/wp-content/uploads/2021/04/young-avengers.jpg)','url(https://cdn.wallpapersafari.com/22/61/NWEx1Y.jpg)','url(https://wallpaperaccess.com/full/1078291.jpg)','url(https://cdn.wallpapersafari.com/39/77/rN50nJ.jpg)','url(https://wallpaperaccess.com/full/1078202.jpg)','url(https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/04/24/816623-815222-avengersendgame-houseful.jpg)',];  

                                        var randomElement = myArray[Math.floor(Math.random() * myArray.length)];
                                        console.log(randomElement);                                      
                                            document.body.style.backgroundImage = " var randomElement "
                                        
                                        
                                        }  
                                                                                       //MADE BY ADITYA CHOUHAN.M//
