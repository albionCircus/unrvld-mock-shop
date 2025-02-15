import Image from 'next/image';
import Bounded from './components/Bounded';

export default function Home() {
  return (
    <Bounded>
      <Image src="/homeHero.jpg" width={1400} height={750} alt="Welcome page hero" priority />
      <article>
        <h1 className="text-center my-6 lg:my-10">Welcome to the UNRVLD Mock Shop</h1>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat quis augue ac accumsan. Nullam nisl lacus, auctor sed risus dapibus, efficitur faucibus odio. Nulla malesuada laoreet odio, vitae feugiat dolor ultrices sit amet. Ut purus velit, luctus ac suscipit sit amet, faucibus vel est. Fusce sollicitudin tincidunt rhoncus. Donec vitae velit porttitor, molestie ligula non, mollis magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec in elit non ligula euismod volutpat dictum in turpis.</p>
          <p>Aliquam ut ex diam. Pellentesque egestas ante et ligula faucibus, at feugiat nunc tempus. Duis augue sem, pellentesque eu orci nec, ultricies pharetra ante. Etiam nisl neque, ornare vitae fermentum id, tincidunt egestas enim. Nulla enim augue, semper nec porttitor et, interdum non nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sed vehicula dolor. Proin quis bibendum tortor. Duis laoreet lacinia leo, ac aliquet dui euismod id.</p>
          <p>Curabitur ut arcu vitae quam eleifend vulputate. In erat libero, consectetur nec nisi eu, venenatis blandit arcu. Suspendisse elementum sem vitae enim ultricies pulvinar. Fusce felis dui, vehicula sed ultrices at, scelerisque lobortis justo. Morbi ultricies enim mi, efficitur imperdiet velit consequat faucibus. Nunc metus orci, lobortis id volutpat ut, gravida et quam. Etiam porta nulla vel tellus elementum tristique ut sit amet enim. Aliquam mauris nisi, egestas quis lectus in, suscipit faucibus risus. Etiam nec finibus risus. Praesent tristique iaculis lacus, a fermentum diam congue vel. Aliquam sed magna nisl. Aliquam pretium nunc urna, quis rutrum urna mollis sed.</p>
          <p>Sed sagittis malesuada orci vitae accumsan. Donec molestie ante ut sapien aliquam, id facilisis ipsum luctus. Maecenas eleifend vulputate velit et pellentesque. Aenean eu bibendum metus, dignissim maximus justo. Cras ut convallis ante, non mollis eros. Pellentesque aliquet lacus libero, sit amet tempor metus consectetur et. Nullam hendrerit velit a ipsum molestie, at gravida orci lobortis. Curabitur vel consectetur velit. Maecenas vel sem nec lacus fringilla commodo. Cras a purus vitae nisi placerat lacinia. Nam pharetra enim sed elit fermentum, at rutrum nisl finibus. Fusce consectetur ullamcorper venenatis. Suspendisse facilisis suscipit felis et consequat. Ut efficitur felis magna, eu sodales dui vulputate sed. Nulla facilisi. Sed convallis sed enim vel ornare.</p>
        </div>
      </article>
    </Bounded>
  )
}