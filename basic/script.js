































// var print = e => alert(e);

// // grab website url
// var url = window.location.hostname;

// // grab website url
// // var url = document.location.hostname;

// print(url);
// // listen for ctrl+shift+a/A
// // $(document).keydown(function(e) {
// //   if((e.key == 'a' || e.key == 'A') && e.ctrlKey && e.shiftKey){
// //     print('nice');
// //     e.preventDefault();
// //     print(url);
// //   }
// // });


// dumpBookmarks();

// // Search the bookmarks when entering the search keyword.
// $(function() {
//     print('hi9');
//   $(document).ready(function() {
//     //  $('#bookmarks').empty();
//     print('first function');
//     dumpBookmarks();
//     print('function 2');
//   });
// });

// // Traverse the bookmark tree, and print the folder and nodes.
// function dumpBookmarks(query) {
//     print('this far');
//     print(chrome.permissions);
//     print('this far 3');

//     var bookmarkTreeNodes = chrome.bookmarks.getTree(
//         function(bookmarkTreeNodes) {
//         print('this far 2');
//         // $('#bookmarks').append(dumpTreeNodes(bookmarkTreeNodes, query));
//         var tn = dumpTreeNodes(bookmarkTreeNodes, query);
//         console.log(tn);
//         print(tn);
//     });
// }

// // 
// function dumpTreeNodes(bookmarkNodes, query) {
//   var list = $('<ul>');
//   var i;
//   for (i = 0; i < bookmarkNodes.length; i++) {
//     list.append(dumpNode(bookmarkNodes[i], query));
//   }
//   return list;
// }
// function dumpNode(bookmarkNode, query) {
//   if (bookmarkNode.title) {
//     if (query && !bookmarkNode.children) {
//       if (String(bookmarkNode.title).indexOf(query) == -1) {
//         return $('<span></span>');
//       }
//     }
//     var anchor = $('<a>');
//     anchor.attr('href', bookmarkNode.url);
//     anchor.text(bookmarkNode.title);
//     /*
//      * When clicking on a bookmark in the extension, a new tab is fired with
//      * the bookmark url.
//      */
//     var span = $('<span>');
//     var options = bookmarkNode.children ?
//       $('<span>[<a href="#" id="addlink">Add</a>]</span>') :
//       $('<span>[<a id="editlink" href="#">Edit</a> <a id="deletelink" ' +
//         'href="#">Delete</a>]</span>');
//     var edit = bookmarkNode.children ? $(`
//     <table>
//       <tr>
//         <td>Name</td>
//         <td> 
//           <input id="title">
//         </td>
//       </tr>
//       <tr>
//         <td>URL</td>
//         <td>
//           <input id="url">
//         </td>
//       </tr>
//     </table>`) : $('<input>');
//     // Show add and edit links when hover over.
//         span.hover(function() {
//         span.append(options);
//         $('#deletelink').click(function() {
//           $('#deletedialog').empty().dialog({
//                  autoOpen: false,
//                  title: 'Confirm Deletion',
//                  resizable: false,
//                  height: 140,
//                  modal: true,
//                  overlay: {
//                    backgroundColor: '#000',
//                    opacity: 0.5
//                  },
//                  buttons: {
//                    'Yes, Delete It!': function() {
//                       chrome.bookmarks.remove(String(bookmarkNode.id));
//                       span.parent().remove();
//                       $(this).dialog('destroy');
//                     },
//                     Cancel: function() {
//                       $(this).dialog('destroy');
//                     }
//                  }
//                }).dialog('open');
//          });
//         $('#addlink').click(function() {
//           $('#adddialog').empty().append(edit).dialog({autoOpen: false,
//             closeOnEscape: true, title: 'Add New Bookmark', modal: true,
//             buttons: {
//             'Add' : function() {
//                chrome.bookmarks.create({parentId: bookmarkNode.id,
//                  title: $('#title').val(), url: $('#url').val()});
//                $('#bookmarks').empty();
//                $(this).dialog('destroy');
//                window.dumpBookmarks();
//              },
//             'Cancel': function() {
//                $(this).dialog('destroy');
//             }
//           }}).dialog('open');
//         });
//         $('#editlink').click(function() {
//          edit.val(anchor.text());
//          $('#editdialog').empty().append(edit).dialog({autoOpen: false,
//            closeOnEscape: true, title: 'Edit Title', modal: true,
//            show: 'slide', buttons: {
//               'Save': function() {
//                  chrome.bookmarks.update(String(bookmarkNode.id), {
//                    title: edit.val()
//                  });
//                  anchor.text(edit.val());
//                  options.show();
//                  $(this).dialog('destroy');
//               },
//              'Cancel': function() {
//                  $(this).dialog('destroy');
//              }
//          }}).dialog('open');
//         });
//         options.fadeIn();
//       },
//       // unhover
//       function() {
//         options.remove();
//       }).append(anchor);
//   }
//   var li = $(bookmarkNode.title ? '<li>' : '<div>').append(span);
//   if (bookmarkNode.children && bookmarkNode.children.length > 0) {
//     li.append(dumpTreeNodes(bookmarkNode.children, query));
//   }
//   return li;
// }

// // document.addEventListener('DOMContentLoaded', function () {
// //   dumpBookmarks();
// // });