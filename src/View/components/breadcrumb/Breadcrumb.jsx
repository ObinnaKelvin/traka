import { Link } from "react-router-dom"
import './breadcrumb.scss'



export const CreateAgentCrumb = () => {
    return (
        <div className="create-agent-breadcrumb">
                <Link className='agent-link' to={'/administration'}>
                    <p>Administration</p>
                </Link>
                <p>/</p>
                <Link className='agent-link' to={'/administration/agent'}>
                    <p>Agent</p>
                </Link>
                <p>/</p>
                <p>Create Agent</p>
        </div>
    )
}

export const SLACrumb = () => {
    return (
        <div className="sla-breadcrumb">
                <Link className='agent-link' to={'/administration'}>
                    <p>Administration</p>
                </Link>
                <p>/</p>
                <p>SLA</p>
        </div>
    )
}