// @flow weak
// import blog from 'babel-log'
import looksLike from 'babel-looks-like'

function isConsoleLog({ node }) {
  return looksLike(node, {
    callee: {
      object: { name: 'console' },
      property: { name: 'log' },
    },
  })
}

export default ({ types: t }) => {
  return {
    name: 'console-with-loc',
    visitor: {
      CallExpression(path) {
        if (isConsoleLog(path)) {
          const { node: loc } = path.get('loc')
          path.node.arguments.unshift(t.stringLiteral(JSON.stringify(loc)))
        }
      },
    },
  }
}
