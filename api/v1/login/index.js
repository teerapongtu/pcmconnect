const btn = document.getElementById('submit_btn');
const liffId = '1661314782-KRlxl4dd';
let userId = '';

function main(){
    // 1.liff init
    // 2.get profile
    liff.init({liffId: liffId});
    liff.ready.then(() => {
        if(!liff.isLoggedIn()){
            liff.login();
        }        
        liff.getProfile().then((profile) => {            
            userId = profile.userId;
            console.log(profile);
        });
    });    
}

main()

async function send(e){     
    e.preventDefault();
    const pcm_code = document.getElementById('pcm_code').value;
    //const password = document.getElementById('password').value;
    //const email = document.getElementById('email').value;    
    // 3. axios post data
    try {
        const result = await axios.post('https://connect.pcm.ac.th/connect/api/v1/link-richmenu', {
            pcm_code: pcm_code,
            //password: password,
            //email: email,
            userId: userId
        });        
        if(result.status == 200){
            console.log("closeWindow");
        	
            liff.closeWindow();
        }
    } catch (error) {
        console.log(error);
    }        
}