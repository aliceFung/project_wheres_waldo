class TagsController < ApplicationController


  def index
    @tags = Tag.all
    @characters = Character.all
    names = {}
    @characters.each do |character| 
      names[character.id]=character.name
    end
    respond_to do |format|
      format.json {render json: {tags: @tags, characters: names}}
    end
  end

  def create
    @tag = Tag.new(params_list)

    # puts "Tag before check___________________________"
    if Character.check_position(@tag, params[:tag][:character_id]) && @tag.save
      puts "Tag checked in create___________________________"
      respond_to do |format|
        format.json { render json: @tag}
      end
      # redirect_to tags_path
    else
      puts "Didn't match coords =============="
      respond_to do |format|
        format.json { render nothing: true, status: 400 }
      end
    end
  end


  def destroy
    @tag=Tag.find(params[:tag][:id])
    if @tag.destroy
      puts "Tag deleted from db ======="
    end
  end

  private

  def params_list
    params.require(:tag).permit(:tag_x, :tag_y, :character_id, :id)
  end

end
