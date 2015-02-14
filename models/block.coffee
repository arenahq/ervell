#
# Model for a single block
#

Base = require "./base.coffee"
sd = require("sharify").data
_ = require 'underscore'

module.exports = class Block extends Base

  url: -> "#{sd.API_URL}/blocks/#{@id}"

  sync: (method, model, options) ->
    switch method
      when 'delete' then options.url = "#{sd.API_URL}/channels/#{options.channel.id}/blocks/#{model.id}"
    super

  title: ->
    if @has('username')
      @get('username')
    else
      @get('title')

  resizeImage: (width = 330, height = 330, source = 'display')->
    # ignore gifs
    if @getImageSize('display').split('.').pop() == 'gif'
      @getImageSize('display')
    else
      "http://images.are.na/resize/#{width}/#{height}/#{encodeURIComponent(@getImageSize(source))}"

  getImageSize: (size) ->
    if @has('image')
      @get('image')?[size]?.url

  getVisibility: ->
    if @get('class') is 'Channel'
      @get('status')
    else
      @get('visibility')

  getPermissions: (user, channel)->
    return "" unless @has('user') && channel?

    permissions = ['can-read']

    # Block owner can edit
    if @belongsToCurrentUser(user)
      permissions.push 'can-edit'

    # Block owner or connector can manage if block is in channel
    if (@connectedByCurrentUser(user) or @belongsToCurrentUser(user))
      permissions.push 'can-manage'

    (_.uniq permissions).join ' '

  belongsToCurrentUser: (user)->
    @get('user').id is user.id

  connectedByCurrentUser: (user)->
    @get('connected_by_user_id') is user.id

  getHref: ->
    if @get('class') is 'Channel'
      "/#{@get('user').slug}/#{@get('slug')}"
    else if @get('class') is 'User'
      "/#{@get('slug')}"
    else
      "/block/#{@id}"

