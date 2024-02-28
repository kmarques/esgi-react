# TPs

## TP1

Créer un composant Gremlins qui affiche autant de MyButton qu'indiqué dans une propriété `genX` de manière factorielle. Pour pouvoir customiser les `MyButton` générés, utiliser une propriété `genProps`.
`genProps` est un object indexé par le numéro du bouton généré. Tous les boutons doivent avoir un marginLeft de 10px sauf le premier.

Exemple:

```jsx
<Gremlins genX={4} />
// Affiche 24 MyButton
<Gremlins genX={3} genProps={{ 2: { title: '2' }, 3: { onClick: () => alert('test') } }} />
// Affiche 6 MyButton avec le 2ème qui a un title de '2' et le 3ème qui a un onClick qui alerte 'test'
```

## TP2
Créer un CRUD complet de liste de tâches en utilisant les states et props
BONUS:
 - Respecter le principe de MVVC: Avoir un composant List générique qui utilise des composants "Vue" pour afficher les tâches
 - Utiliser localStorage pour la partie Model

```jsx
function TaskListView() {
    const TaskManager = {
        add: ()=> {...}
        delete: () => {...}
        edit: () => {...}
    }

    return (
        <div>
            <ListContainer model={TaskManager} container={TaskList} item={TaskItem} form={TaskForm} />
        </div>
    )
}
```
## TP3
Reprendre le TP2 et ajouter le chargement automatique des tâches depuis un serveur (utiliser json-server pour simuler un serveur) et mettre en place un système générique de filtres et paginations.