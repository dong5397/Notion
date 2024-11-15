import EditorPage from './components/EditorPage.js'
import SidebarPage from './components/SidebarPage.js'

export default function App({ $target }) {
    const $listContainer = document.createElement('div')
    const $editorContainer = document.createElement('div')

    $target.appendChild($listContainer)
    $target.appendChild($editorContainer)

    const sidebarpage = new SidebarPage({ $target: $editorContainer })
    const editorpage = new EditorPage({ $target: $listContainer })
}
