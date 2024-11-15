import SidebarPage from './components/SidebarPage.js'
import EditorPage from './components/EditorPage.js'

export default function App({ $target }) {
    const dummyData = [
        {
            id: 1,
            title: '제목1',
            documents: [
                {
                    id: 2,
                    title: '제목2',
                    documents: [
                        {
                            id: 3,
                            title: '제목3',
                            documents: [],
                        },
                    ],
                },
            ],
        },
        {
            id: 4,
            title: '제목4',
            documents: [],
        },
    ]
    const $listContainer = document.createElement('div')
    const $editorContainer = document.createElement('div')

    $target.appendChild($editorContainer)
    $target.appendChild($listContainer)

    const sidebarpage = new SidebarPage({
        $target: $editorContainer,
        initalState: dummyData,
    })
    const editorpage = new EditorPage({ $target: $listContainer })
}
