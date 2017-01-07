class Api::NotesController < ApiController
  def index
    notes = Folder.find(params[:id]).notes
  end

  def show
    note = Note.find(params[:id]).notes
  end

  def create
    note = Note.new(note_params)
    note.assign_attributes(user_id: current_user.id)
    if note.save
      message = "New Note!"
    else
      message = note.errors.full_messages[0]
    end
    notes = Folder.find(note_params[:folder_id]).notes.reverse
    render json: {chosenNote: note, notes: notes}, status: :ok
  end

  def update
    note = Note.find(params[:id])
    note.update_attributes(body: params[:body])
    notes = note.folder.notes.reverse
    render json: {chosenNote: note, notes: notes}, status: :ok
  end

  def destroy
    note = Note.find(params[:id])
    folder = note.folder
    note.destroy
    notes = folder.notes.reverse || []
    chosenNote = notes.first || {}
    render json: {notes: notes, chosenNote: chosenNote}, status: :ok
  end

  private
  def note_params
    params.require(:note).permit(:folder_id, :body)
  end
end
