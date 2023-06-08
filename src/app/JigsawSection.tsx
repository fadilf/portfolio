export default function JigsawSection() {

    return (
        <section className='max-w-7xl mx-auto px-5 py-20 mb-20 md:px-10'>
            <div className='jigsaw-text'>
                <h2 className='text-5xl font-semibold mb-3 text-gray-50'>How I Got Here</h2>
                <h3 className='text-2xl font-semibold mb-3'>By learning to do and doing to learn</h3>
                <p className='mb-2'>
                    As you'll see below, I constantly keep myself busy with projects I find interesting that refine what I know and throw me into the deep end of something new.
                </p>
                <p>
                    I started in full stack development by pasting HTML snippets in Blogger, in electronics with Lego Mindstorms, and in data science by scraping Spanish tests to study vocab.
                </p>
            </div>
            <div className='jigsaw transition-hidden'>
                <div>
                    <span className='piece piece-1 male-right male-bottom'>
                        {[...Array(9)].map((x, i) =>
                            <span key={i}></span>
                        )}
                    </span>
                    <span className='piece piece-2 male-right female-left female-bottom'>
                        {[...Array(9)].map((x, i) =>
                            <span key={i}></span>
                        )}
                    </span>
                </div>
                <div>
                    <span className='piece piece-3 female-top male-bottom female-right'>
                        {[...Array(9)].map((x, i) =>
                            <span key={i}></span>
                        )}
                    </span>
                    <span className='piece piece-4 male-top female-bottom female-right male-left'>
                        {[...Array(9)].map((x, i) =>
                            <span key={i}></span>
                        )}
                    </span>
                </div>
            </div>
        </section>
    );
}