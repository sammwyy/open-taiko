import WebSocket from 'ws'

export default (expressServer) => {
  const websocketServer = new WebSocket.Server({
    noServer: true,
    path: '/p2',
  })

  expressServer.on('upgrade', (request, socket, head) => {
    websocketServer.handleUpgrade(request, socket, head, (client) => {
      console.log('Websocket connected')
    })
  })

  return websocketServer
}
