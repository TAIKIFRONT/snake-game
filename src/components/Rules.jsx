import React from "react"

const Rules = () => {
  return (
    <a>
      スネークゲームとはゲームオーバーにならずに、どれだけ自分を成長させることができるかを競うゲームです。
      ゲームを行う上でのルールは下記のようなものになります。
      スネーク（フィールド上の白い点）は壁にぶつかるとゲームオーバー
      えさ（フィールド上のピンクの点）にスネークが食べる（ぶつかる）とスネークが成長して長くなる
      スネークが成長して、自分自身を食べて（ぶつかる）しまってもゲームオーバー
      実際のスネークゲームだと時間が経つにつれて、壁が狭まるようなルールがあるものもあるようですが、
      今回のゲームではそこの実装は行わずに上記ルールのゲームを実装していくことを目指します。
    </a>
  )
}

export default Rules
