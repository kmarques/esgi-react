/**
 * Créer un CRUD complet de liste de tâches en utilisant les states et props
 * BONUS:
 *  - Respecter le principe de MVVC: Avoir un composant List générique qui utilise des composants "Vue" pour afficher les tâches
 *  - Utiliser localStorage pour la partie Model
 */

// function TaskListView() {
//     const [tasks, setTasks] = useState([]);
//     const [store, setStore] = useState({
//          user: {},
//          tasks: []
//      })
//     const TaskManager = {
//         selectors: {
//             get: () => Object.values(store.tasks).map(t => ({...t, default: 3})),
//             count: () => store.tasks.filter(t => t.status === 'live').length,
//         },
//         actions: {
//             fetch:
////           add:
//             delete:
//             edit:
//         }
//     }
//
//     return (
//         <div>
//             <ListContainer model={TaskManager} container={TaskList} item={TaskItem} form={TaskForm} />
//         </div>
//     )
// }
