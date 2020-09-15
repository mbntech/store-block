import React from 'react'
import { useCssHandles } from "vtex.css-handles"

const CSS_HANDLES = ["instagram"]

interface InstagramProps {
  account: string
}

const Instagram: StorefrontFunctionComponent<InstagramProps> = ({ account }) => {
    const handles = useCssHandles(CSS_HANDLES);
    let count = 0;
    let profileurl = '';

    // fetch("https://www.instagram.com/"+{account}+"/?__a=1")
    //     .then(rest => rest.json())
    //     .then(
    //         (result) => {
    //             console.log(result)
    //             profileurl = result.graphql.user.profile_pic_url
    //             count = result.graphql.user.edge_owner_to_timeline_media.count
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );

    return (
    <div>
        <img src={profileurl} />
        <div className={`${handles.instagram} t-heading-2 fw3 w-100 c-muted-1 db tc`}>
        instagram {account}: {count} posts
        </div>
    </div>
  )
}

Instagram.schema = {
  title: 'editor.instagram.title',
  description: 'editor.instagram.description',
  type: 'object',
  properties: {
    account: {
      title: 'Account',
      description: 'Account to show',
      type: 'string',
      default: null,
    },
  },
}

export default Instagram
