import { Value } from 'slate';

export const initValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'Start writing...'
              }
            ]
          }
        ]
      }
    ]
  }
});
