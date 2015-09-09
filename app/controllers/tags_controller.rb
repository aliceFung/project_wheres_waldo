class TagsController < ApplicationController

  def index
    
  end

  def show
    @tag=Tag.find(params[:id])
    respond_to do |format|
      format.js 
    end
  end

end
