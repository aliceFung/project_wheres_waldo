class GamesController < ApplicationController

  def index
    @characters=Character.all
  end
end
