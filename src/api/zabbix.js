import fetch from '@/utils/http'
import { getServerUrl, getAuth } from '@/utils/http'

export function login (name, pwd) {
  return fetch({
    url: getServerUrl(),
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      'jsonrpc': '2.0',
      'method': 'user.login',
      'params': {
        'user': name,
        'password': pwd
      },
      'id': 1
    }
  })
}

export function getHostGroup () {
  return fetch({
    url: getServerUrl(),
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      "auth": getAuth(),
      "id": 1,
      "jsonrpc": "2.0",
      "method": "hostgroup.get",
      "params": {
        "output": [
          "name"
        ],
        "real_hosts": true,
        "sortfield": "name"
      }
    }
  })
}

export function getHost (groupid) {
  return fetch({
    url: getServerUrl(),
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      "auth": getAuth(),
      "id": 1,
      "jsonrpc": "2.0",
      "method": "host.get",
      "params": {
        "groupids": [
          groupid
        ],
        "output": [
          "name",
          "host"
        ],
        "sortfield": "name"
      }
    }
  })
}

export function getApplication (hostid) {
  return fetch({
    url: getServerUrl(),
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      "auth": getAuth(),
      "id": 1,
      "jsonrpc": "2.0",
      "method": "application.get",
      "params": {
        "hostids": [
          hostid
        ],
        "output": [
          "applicationid",
          "name"
        ]
      }
    }
  })
}
export function getItemByApp (applicationid) {
  return fetch({
    url: getServerUrl(),
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      "auth": getAuth(),
      "id": 1,
      "jsonrpc": "2.0",
      "method": "item.get",
      "params": {
        "applicationids": [
          applicationid
        ],
        "filter": {
          "value_type": [
            0,
            3
          ]
        },
        "output": [
          "name",
          "key_",
          "value_type",
          "hostid",
          "status",
          "state"
        ],
        "selectHosts": [
          "hostid",
          "name"
        ],
        "sortfield": "name",
        "webitems": true
      }
    }
  })
}

export function getItem (hostid) {
  return fetch({
    url: getServerUrl(),
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      "auth": getAuth(),
      "id": 1,
      "jsonrpc": "2.0",
      "method": "item.get",
      "params": {
        "hostids": [
          hostid
        ],
        "filter": {
          "value_type": [
            0,
            3
          ]
        },
        "output": [
          "name",
          "key_",
          "value_type",
          "hostid",
          "status",
          "state"
        ],
        "selectHosts": [
          "hostid",
          "name"
        ],
        "sortfield": "name",
        "webitems": true
      }
    }
  })
}
export function getHistory (itemid,time_from,time_till,value_type) {
  return fetch({
    url: getServerUrl() + '/zabbix/api_jsonrpc.php',
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: {
      "auth":getAuth(),
      "id": 1,
      "jsonrpc": "2.0",
      "method": "history.get",
      "params": {
        "history": value_type,
        "itemids": [
          itemid
        ],
        "output": "extend",
        "sortfield": "clock",
        "sortorder": "ASC",
        "time_from": time_from,
        "time_till": time_till
      }
    }
  })
}

