import React from 'react'
import Table from 'tb-table'

const info = {
    fields: [{
        key: 'value',
        value: '元字符'
    }, {
        key: 'description',
        value: '描述'
    }],
    get: {
        url: '/api/regex',
        method: 'get',
        beforeSend: (info, currentPage)=> {
            info.page = currentPage
            return info
        },
        success: (res, pagination)=> {
            pagination.next = res['has_next']
            return res['data']
        }
    }
}

export default class Demo extends React.Component {
    render() {
        return (
            <Table {...info}/>
        )
    }
}