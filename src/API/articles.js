import uuid from "uuid";
import img1 from '../Components/assets/img/img1.jpg';
import img2 from '../Components/assets/img/img2.jpeg';
import img3 from '../Components/assets/img/img3.jpeg';
import img4 from '../Components/assets/img/img4.jpg';
import img5 from '../Components/assets/img/img5.jpeg';
import img6 from '../Components/assets/img/img6.jpeg';
import img7 from '../Components/assets/img/img7.jpeg';


export const articles = [
    {
        //Generating unique id
        "id": uuid(),
        "date": "2018-07-09T15:03:23.000Z",
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
        "date": "2018-07-03T15:03:23.000Z",
        "title": "Hey! I am a second post.",
        "text": "Morbi sagittis justo eget orci facilisis dictum. Nulla velit lorem, ornare eu leo in, feugiat dapibus ligula. Nam faucibus, sapien sit amet lobortis cursus, risus sapien convallis nisi, vitae auctor lorem orci eget velit. Nulla vitae tortor vitae arcu accumsan dictum quis vitae nibh. Pellentesque nec nulla id ante convallis posuere ut quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ullamcorper lectus. Donec nulla nunc, tempus nec sapien quis, lobortis scelerisque diam. Morbi euismod posuere turpis vitae sagittis. Nullam convallis eros lorem, quis dignissim lacus sollicitudin vitae. Praesent vitae orci sit amet massa bibendum feugiat. Vivamus in iaculis velit. Donec quis sapien nec ligula tincidunt scelerisque nec et nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": img2,
        "commentaries": []
    },
    {
        //Generating unique id
        "id": uuid(),
        "date": "2018-07-05T15:03:23.000Z",
        "title": "What's up! I am a third post.",
        "image": img3,
        "text": "Fusce non facilisis dui. Sed eget convallis nisl. Integer iaculis mattis quam quis blandit. Etiam elementum ligula velit, nec varius ligula ornare eu. Duis porttitor, mi iaculis aliquet faucibus, leo tellus iaculis nisl, at tristique orci risus a felis. Praesent interdum nulla in justo ullamcorper elementum. Aenean molestie arcu sit amet nisl faucibus fermentum. Phasellus nec dapibus tellus. Donec luctus vehicula sapien, fringilla viverra justo dapibus eget.",
        // "commentaries": []
    },
    {
        //Generating unique id
        "id": uuid(),
        "date": "2018-07-05T15:03:23.000Z",
        "title": "Good afternoon! I am a fourth post.",
        "image": img4,
        "text": "Nulla vehicula pulvinar velit, a feugiat dui laoreet suscipit. Phasellus hendrerit quam et dictum finibus. Morbi id felis eu odio sagittis egestas. Nulla eu cursus libero, et ultricies orci. Quisque vestibulum odio interdum, euismod metus ut, aliquet quam. Ut feugiat tristique lorem, ut viverra neque semper sed. Vivamus sed eros cursus, varius justo sit amet, porta lorem. In ultricies in leo vel feugiat. Cras ac vulputate quam, eget sagittis mi. Praesent suscipit tortor ac magna tincidunt cursus. Integer lorem neque, tempus ac justo et, sodales dapibus lectus. Vestibulum sed tellus vel lorem vulputate tincidunt sed eget enim. In hendrerit maximus purus, id vestibulum tortor auctor eget. In dapibus consequat accumsan. Maecenas nisi arcu, rutrum et mauris ac, maximus elementum eros. Nulla felis neque, molestie eget rhoncus eget, finibus sed leo.",
        "commentaries": []
    },
    {
        //Generating unique id
        "id": uuid(),
        "date": "2018-07-07T15:03:23.000Z",
        "title": "Good morning! I am a fifth post.",
        "image": img5,
        "text": "Donec nisl est, molestie quis ligula nec, aliquet molestie ante. Nullam tempor at purus quis placerat. Cras semper ex vel mauris dictum sodales sit amet vel nibh. Curabitur placerat odio tincidunt, semper erat sollicitudin, tempus erat. Integer aliquet dapibus augue vel faucibus. Fusce mattis sem nec libero semper, nec ornare dolor molestie. Fusce sit amet maximus tellus. Sed varius rhoncus nunc, vitae hendrerit augue suscipit eu. Morbi dignissim, sem non efficitur luctus, justo augue euismod purus, eget congue velit nibh at libero. Pellentesque malesuada leo sed magna dapibus, vel laoreet felis hendrerit. Nam placerat, mi dapibus cursus pellentesque, ipsum nibh molestie quam, varius commodo ante leo eu quam. In bibendum, sapien non commodo iaculis, dolor est pretium enim, vel fringilla lorem nibh nec quam. Ut vitae lobortis erat, ac rutrum elit. Donec mattis et mauris sed venenatis. In vel quam ex. Mauris viverra dui et volutpat blandit.",
        "commentaries": []
    },
    {
        //Generating unique id
        "id": uuid(),
        "date": "2018-07-08T15:03:23.000Z",
        "title": "Good evening! I am a sixth post.",
        "image": img6,
        "text": "Cras quis suscipit lorem. Sed ornare congue velit, eu feugiat dolor condimentum pretium. Vestibulum a turpis in ligula egestas pretium. Ut at hendrerit felis, nec malesuada nunc. Morbi consequat diam eget orci ornare fringilla. Duis mauris purus, feugiat sit amet orci lacinia, pellentesque posuere ante. Quisque in urna lorem. Integer in ex eu lorem euismod tincidunt id vitae felis. Nulla vitae sodales lorem. Pellentesque rhoncus, dui a condimentum iaculis, ex dui aliquet ipsum, nec blandit dui ipsum at metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. In ac tincidunt tortor. Etiam tincidunt cursus lorem, eu aliquam augue iaculis eu. Pellentesque pulvinar semper metus, eu tincidunt sem viverra sed. Vivamus vel tristique massa, id eleifend elit.",
        "commentaries": []
    },
    {
        //Generating unique id
        "id": uuid(),
        "date": "2018-07-10T15:03:23.000Z",
        "title": "Good night! I am a seventh post.",
        "image": img7,
        "text": "Nam dignissim scelerisque vulputate. In venenatis sodales dolor, a blandit risus porttitor elementum. Fusce quis tincidunt sapien. Proin consequat erat id eros accumsan aliquam. Suspendisse nec leo faucibus, elementum risus cursus, ultricies velit. Suspendisse tristique pulvinar magna ac dignissim. Donec maximus in felis quis elementum. Pellentesque condimentum dignissim orci, nec pharetra sapien congue vel. Aenean molestie ultrices nisl, ac consequat elit blandit et. Suspendisse euismod lobortis nibh, ut efficitur massa. Phasellus vitae suscipit ante. Integer et leo sit amet nulla tincidunt ultricies sed eget elit.",
        "commentaries": []
    }
];

export default articles;