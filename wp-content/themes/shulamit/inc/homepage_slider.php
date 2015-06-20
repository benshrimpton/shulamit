<section class="slide-wrapper">
  <section id="homepage-gallery" class="royalSlider rsDefault">
  
    <?php  if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php
      $images = get_field('images');
      $image = $images[0];
      ?>
      
      <?php foreach( $images as $image ): ?>
      
        <a href="<?php echo $image['sizes']['large']; ?>" class="rsImg"/></a>
        
      <?php endforeach; ?>
      
    <?php endwhile; endif;  ?>
  
  </section>
  
  <aside class="slide-credit">
    <h2>Melanie Daniel:</h2>
    <h3>Piecemaker</h3>
    <time datetime="">May 21, 2015 - June 27, 2015</time>
  </aside>
</section>