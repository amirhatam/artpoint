import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import data from '../../data.json'
import Link from 'next/link'
import BGI from '../../public/images/bg.webp'


export default function Post() {

    // USE 'window.innerHeight' in Next.js
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    //Get data using variable from query
    const router = useRouter();
    const artistId = router.query;

    const artistName = ''
    const arr = []

    const findArtist = data.artists.map(a => {
        //Find artist artwork from id
        if (artistId.id === a.id) {
            artistName = a.name
            const artworks = a.artworks
            const firstName = a.name.split(" ")[0].toLowerCase()
            const lastName = ''
            if (a.name.split(" ")[1]) {
                lastName = a.name.split(" ")[1].toLowerCase()
            }

            // filter undefined data & remove dash and name of artist
            artworks.map(e => {
                if (e.slug !== undefined) {
                    let rmvDash = e.slug.split("-")
                    let res = []
                    rmvDash.filter(s => {
                        if (s !== firstName && s !== lastName) {
                            res.push(s + ' ')
                        }

                    })
                    arr.push(res)
                }

            })
        }
    })

    return <>
        <main style={{ background: `url(${BGI.src})`, backgroundSize: 'cover', height: height }}>
            <div className="container marketing pt-5">
                <div className="row justify-content-center pt-lg-5">
                    <div className="card bg-light col-lg-5 col-10 mt-lg-5 pt-5 pb-4" >
                        <h3 className='mb-4 text-center fw-light'> Les œuvres de <strong> {artistName}</strong>
                        </h3>
                        <div className='px-5'>

                            {
                                arr.length > 0
                                    ?
                                    arr.map((e, i) =>
                                        e !== undefined
                                            ?
                                            <h5 key={i} className="text-capitalize mt-3 fw-light">{i + 1} -  <strong>{e}</strong></h5>
                                            :
                                            null
                                    )
                                    :
                                    <h5 className="mt-3">Not Found !</h5>
                            }
                        </div>
                        <div className="text-center mt-3">
                            <Link href={`/`}>
                                <a className="btn btn-secondary" > &laquo; Retour</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </>
}
// export async function getStaticProps(p) {
//     const datas = (await import("../../data.json")).default;
//     return {
//         props: { datas }
//     };
// }

// export async function getStaticPaths() {
//     const datas = (await import("../../data.json")).default;

//     const artistName = ''
//     const arr = []

//     const findArtist = datas.artists.map(a => {
//         //Find artist artwork from id
//         if (artistId.id === a.id) {
//             artistName = a.name
//             const artworks = a.artworks
//             const firstName = a.name.split(" ")[0].toLowerCase()
//             const lastName = ''
//             if (a.name.split(" ")[1]) {
//                 lastName = a.name.split(" ")[1].toLowerCase()
//             }

//             // filter undefined data & remove dash and name of artist
//             artworks.map(e => {
//                 if (e.slug !== undefined) {
//                     let rmvDash = e.slug.split("-")
//                     let res = []
//                     rmvDash.filter(s => {
//                         if (s !== firstName && s !== lastName) {
//                             res.push(s + ' ')
//                         }

//                     })
//                     arr.push(res)
//                 }

//             })
//         }
//     })
//     return {
//         paths:
//         {
//             params:{ id:  toString()}
//         },
//         fallback: false,
//     };
// }

