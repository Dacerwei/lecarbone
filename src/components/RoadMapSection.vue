<template>
    <section id="show_roadmap">
      <h1>Roadmap</h1>
      <hr class="title" />
      <div class="roadmap">
        <div class="uppermap">
          <div class="up_container">
            <div class="utitle">2017 Q1</div>
            <div class="uinfo u1">
              <p>
                Indonesian Chamber of Commerce and Industry enter into
                contract with Pelestarian Alam Nusantara Foundation
                Forest protection & poverty alleviation education
              </p>
            </div>
            <div class="upoint"></div>
          </div>
          <div class="up_container">
            <div class="utitle">2017 Q3</div>
            <div class="uinfo u2">
              <p>Land acquisition and felling permits from the Government.<br>Land development.</p>
            </div>
            <div class="upoint"></div>
          </div>
          <div class="up_container">
            <div class="utitle">2018 Q2</div>
            <div class="uinfo u3">
              <p>Baseline survey Poverty alleviation material transpotation & allocation</p>
            </div>
            <div class="upoint"></div>
          </div>
          <div class="up_container">
            <div class="utitle">2018 Q4</div>
            <div class="uinfo u4">
              <p>Certification of carbon credits completed.
                Price of carbon credits set, with announcement on amount
                carbon credits acquired
              </p>
            </div>
            <div class="upoint"></div>
          </div>
          <div class="up_container">
            <div class="utitle">2019 Q2</div>
            <div class="uinfo u5">
              <p>Launch of online charity donation system.
                Launch of online exchange system for sponsored goods.</p>
            </div>
            <div class="upoint"></div>
          </div>
          <div class="up_container last">
            <div class="utitle">2019 Q4</div>
            <div class="uinfo u6">
              <p>Contract renewal</p>
            </div>
            <div class="upoint"></div>
          </div>
        </div>
        <hr class="centerline" />
        <div class="lowermap">
          <div class="dp_container d1">
            <div class="dinfo">
              <p>Forest protection & poverty alleviation education</p>
            </div>
            <div class="dpoint"></div>
            <div class="dtitle">2017 Q2</div>
          </div>
          <div class="dp_container">
            <div class="dinfo">
              <p>Legel consultancy Under-forest operation Private Sale</p>
            </div>
            <div class="dpoint"></div>
            <div class="dtitle">2017 Q1</div>
          </div>
          <div class="dp_container d3">
            <div class="dinfo">
              <p>Agarwood formation and fungus-growing</p>
            </div>
            <div class="dpoint"></div>
            <div class="dtitle">2018 Q3</div>
          </div>
          <div class="dp_container d4">
            <div class="dinfo">
              <p>Launch of online exchange for carbon credits.</p>
            </div>
            <div class="dpoint"></div>
            <div class="dtitle">2019 Q1</div>
          </div>
          <div class="dp_container">
            <div class="dinfo">
              <p>Launch of online exchange system for under-forest products.</p>
            </div>
            <div class="dpoint"></div>
            <div class="dtitle">2019 Q3</div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'RoadMap',
};
</script>

<style lang="sass" scoped>
$color_yellow: #F1CF69
*
  // border: solid 1px
  position: relative
  // font-family:

#show_roadmap
  padding: 40px 0;
  h1
    text-align: center
    margin-bottom: 15px
    font-size: 36px
    color: $color_yellow
  hr.title
    width: 40px
    border: 1px solid $color_yellow
    background-color: $color_yellow
    margin-bottom: 40px
    margin: 0 auto
  .uppermap
    font-size: 0px
    padding-left: 4%
    .up_container
      vertical-align: bottom
      font-size: initial
      display: inline-block
      width: calc(100% / 6 + 5px)
      .utitle
        margin-bottom: 15px
        padding: 0px 6%
        font-weight: 900
      .upoint
        width: 15px
        height: 15px
        position: absolute
        left: 0px
        bottom: 0px
        transform: translate(-50%, 50%)
        border-radius: 50%
        background-color: $color_yellow
        z-index: 2
      .uinfo
        width: 70%
        border-left: solid 1px $color_yellow
        padding: 0px 15px
        font-size: 12px
      .u1
        height: 250px
      .u2
        height: 150px
      .u3
        height: 150px
      .u4
        height: 250px
      .u5
        height: 150px
      .u6
        height: 150px

    .up_container.last
      width: calc(100% / 6 - 4%)
  .lowermap
    font-size: 0px
    padding-left: 12%
    .dp_container
      vertical-align: top
      font-size: initial
      display: inline-block
      width: calc(100% / 6 + 5px)
      .dtitle
        margin-top: 15px
        padding: 0px 6%
        font-weight: 900
      .dinfo
        width: 50%
        height: 150px
        border-left: solid 0.1px $color_yellow
        padding: 0px 15px
        font-size: 12px
        p
          position: absolute
          bottom: 0px
          margin: 0px
      .dpoint
        width: 15px
        height: 15px
        position: absolute
        border-radius: 50%
        top: 0px
        left: 0px
        transform: translate(-50%, -50%)
        background-color: $color_yellow
    .dp_container.d1
      width: calc(100% / 6 + 60px)
    .dp_container.d3
      width: calc(100% / 6 + 30px)
    .dp_container.d4
      width: calc(100% / 6 + 30px)

  .centerline
    width: 100%
    margin: 0px
    border: solid 1px $color_yellow
</style>
