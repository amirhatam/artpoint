import React from 'react'
import Link from 'next/link'

export default function Main(props) {
    if (props.data) {
        const artists = props.data.artists;

        return (
            <div className="container marketing mb-5">
                <h1 className='m-5 text-center text-uppercase fw-light'>les artistes</h1>
                <div className="row justify-content-between">
                    {
                        artists.map((sub, subindex) =>
                            <div className="card bg-light col-lg-5 my-4 text-center py-4" key={subindex}>
                                <div className="card-body mb-4">
                                    <h5 className="card-title mb-4">{sub.name}</h5>
                                    <p className="card-text">
                                        {
                                            //Removing the 3 first character && Removing the 3 last character
                                            sub.texts[0].body.slice(3, sub.texts[0].body.length - 4)
                                        }
                                    </p>
                                </div>
                                <div>
                                    <Link href={`/blog/${sub.id}`}>
                                        <a className="btn btn-secondary" >Des Œuvre &raquo;</a>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

}
