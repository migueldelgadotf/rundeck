import {observable} from 'mobx'


class WorkflowStore {
    @observable workflows
}

class Workflow {
    jobId: string
    exec: string
    @observable jobref?: IJobRef

}

interface IJobRef {
    name: string
    group?: string
    uuid: string
    nodeStep: string
    importOptions: boolean
}