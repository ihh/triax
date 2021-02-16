const cards =
      [{ html: 'You are offered an angel investment from a venture capitalist with a vindictive reputation. Do you want to accept it?', limit: 1, left: { hint: 'No' }, right: { hint: 'Yes', reward: { value: 20, evil: 30 } } },
       { html: 'It seems that your lab is leaking chemicals into the local creek. The clean-up costs will be extensive.', limit: 1, left: { hint: 'Cover it up', reward: { value: -10 } }, right: { hint: 'OK', reward: { evil: 20 } } },
       { html: 'Game Over', priority: -1 }]
