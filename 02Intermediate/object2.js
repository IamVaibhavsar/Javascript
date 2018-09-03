//let myArray = ['name',33,true]
let myYoutubeVideo1 = {
    title: 'Loops in javascript',
    videolLength: 1,
    videoCreator: 'Vaibhav Bhavsar',
    videoDescription: 'this is a video description and a long one.',

}

let myYoutubeVideo2 = {
    title: 'functions in javascript',
    videolLength: 10,
    videoCreator: 'Vaibhav Bhavsar',
    videoDescription: 'this is a video description and a long one.',

}



console.log(`hey new video on ${myYoutubeVideo1.title} by ${myYoutubeVideo1.videoCreator}`);
//console.log(`hey new video on ${myYoutubeVideo2.title} by ${myYoutubeVideo2.videoCreator}`);




myYoutubeVideo1.title = 'ForEach loop in JS'      //change the title
console.log(`hey new video on ${myYoutubeVideo1.title} by ${myYoutubeVideo1.videoCreator}`);
console.log(myYoutubeVideo1);  //title is changned in object as well.



//OUTPUT:
/*hey new video on Loops in javascript by Vaibhav Bhavsar
hey new video on ForEach loop in JS by Vaibhav Bhavsar
{
    title: 'ForEach loop in JS',
        videolLength: 1,
            videoCreator: 'Vaibhav Bhavsar',
                videoDescription: 'this is a video description and a long one.'
}*/