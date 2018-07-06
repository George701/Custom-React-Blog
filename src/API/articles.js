import uuid from "uuid";
import img1 from '../Components/assets/img/img1.jpg';
import img2 from '../Components/assets/img/img2.jpeg';
import img3 from '../Components/assets/img/img3.jpeg';


export const articles = [
    {
        //Generating unique id
        "id": uuid(),
        "title": "Greetings! I am a first post.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum felis sed ultrices maximus. Cras volutpat massa eget urna euismod sollicitudin. Suspendisse mollis ultrices rutrum. Maecenas laoreet dolor ut fermentum tempor. Sed luctus leo tellus, pretium lobortis enim semper eu. Nunc id enim eget odio venenatis fermentum vitae eu nunc. Etiam vitae nisl nec lorem euismod malesuada eu sit amet lectus. Cras porta eros at mauris aliquet, eget faucibus tortor bibendum. Praesent hendrerit libero ex, ut facilisis purus venenatis sed.",
        "image": img1,
        "commentaries": [
            {
                "id": uuid(),
                "name": "James Franko",
                "message": "Idk, seems fine to me",
            },

            {
                "id": uuid(),
                "name": "Gregory House",
                "message": "Author is noob at programming. Give up coding!"
            },

            {
                "id": uuid(),
                "name": "Iqy",
                "message": "I wil go home now"
            }
        ]
    },

    {
        //Generating unique id
        "id": uuid(),
        "title": "Hey! I am a second post.",
        "text": "Morbi sagittis justo eget orci facilisis dictum. Nulla velit lorem, ornare eu leo in, feugiat dapibus ligula. Nam faucibus, sapien sit amet lobortis cursus, risus sapien convallis nisi, vitae auctor lorem orci eget velit. Nulla vitae tortor vitae arcu accumsan dictum quis vitae nibh. Pellentesque nec nulla id ante convallis posuere ut quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ullamcorper lectus. Donec nulla nunc, tempus nec sapien quis, lobortis scelerisque diam. Morbi euismod posuere turpis vitae sagittis. Nullam convallis eros lorem, quis dignissim lacus sollicitudin vitae. Praesent vitae orci sit amet massa bibendum feugiat. Vivamus in iaculis velit. Donec quis sapien nec ligula tincidunt scelerisque nec et nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": img2,
        "commentaries": []
    },
    {
        //Generating unique id
        "id": uuid(),
        "title": "What's up! I am a third post.",
        "image": img3,
        "text": "Fusce non facilisis dui. Sed eget convallis nisl. Integer iaculis mattis quam quis blandit. Etiam elementum ligula velit, nec varius ligula ornare eu. Duis porttitor, mi iaculis aliquet faucibus, leo tellus iaculis nisl, at tristique orci risus a felis. Praesent interdum nulla in justo ullamcorper elementum. Aenean molestie arcu sit amet nisl faucibus fermentum. Phasellus nec dapibus tellus. Donec luctus vehicula sapien, fringilla viverra justo dapibus eget.",
        // "commentaries": []
    }
];

export default articles;