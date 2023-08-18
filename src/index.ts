import { Context, Schema, Session } from 'koishi'

export const name = 'command-echo'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  // 如果收到"忘夕的小花" 则返回"x , y , z , 
  // https://mc.dreamdropsakura.asia/#overworld:46:56:12:125:0:0:0:1:flat
  //                                /#世界名称:x:y:z:视图高度:0:0:0:1:flat
  ctx.on('message', (session) => {
    if (session.content === '忘夕的小花') {
      var x = 1230
      var y = 81
      var z = -90
      var worldName = 'overworld'
      session.send('坐标：x, y, z, \n地图位置：https://mc.dreamdropsakura.asia/#' + worldName + ':' + x + ':' + y + ':' + z + ':125:0:0:0:1:flat \n[图片]')
    }
  })
}
