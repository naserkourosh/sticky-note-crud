// import React from 'react'

// class AppText extends React.Component {
//     componentDidMount() {

//         $(document).ready(function () {
//            var all_notes = $("li a");
          
//             all_notes.on("keyup", function () {
//              var note_title = $(this).find("h2").text();
//             var  note_content = $(this).find("p").text();
          
//              var item_key = "list_" + $(this).parent().index();
          
//             var  data = {
//                 title: note_title,
//                 content: note_content
//               };
          
//               window.localStorage.setItem(item_key, JSON.stringify(data));
//             });
          
//             all_notes.each(function (index) {
//               data = JSON.parse(window.localStorage.getItem("list_" + index));
          
//               if (data !== null) {
//                 note_title = data.title;
//                 note_content = data.content;
          
//                 $(this).find("h2").text(note_title);
//                 $(this).find("p").text(note_content);
//               }
//             });
//           });
          
//     }
// }

// export default AppText;